import { EventBus } from '../eventBus/eventBus';
import { EBlockEvents, TBlockEventBus, IMeta } from './Block.interfaces';

export class Block<T extends Record<PropertyKey, unknown>> {
  private _meta: IMeta<T>;

  private eventBus: () => TBlockEventBus;

  _element: null | HTMLElement = null;

  protected props: T;

  constructor(props: T = {} as T, tagName = 'div') {
    const eventBus = new EventBus<EBlockEvents>();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = (): TBlockEventBus => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EBlockEvents.INIT);
  }

  _registerEvents(eventBus: TBlockEventBus): void {
    eventBus.on(EBlockEvents.INIT, this.init.bind(this));
    eventBus.on(EBlockEvents.MOUNT, this._componentDidMount.bind(this));
    eventBus.on(EBlockEvents.RENDER, this._render.bind(this));
  }

  _createResources(): void {
    const { tagName } = this._meta;

    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();

    this.eventBus().emit(EBlockEvents.RENDER);
  }

  _componentDidMount(props: T): void {
    this.componentDidMount(props);
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(props: T): void {}

  public dispatchComponentDidMoun(): void {
    this.eventBus().emit(EBlockEvents.MOUNT, this._meta.props);
  }

  _componentDidUpdate(oldProps: T, newProps: T): void {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this._render();
    }
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps: T, newProps: T): boolean {
    return true;
  }

  setProps = (nextProps: T): void => {
    if (nextProps) {
      Object.assign(this.props, nextProps);
    }
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  _render(): void {
    if (!this._element) {
      return;
    }

    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду

    this._element.innerHTML = block;
  }

  // Может переопределять пользователь, необязательно трогать
  render(): string {
    return '';
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  private _makePropsProxy(props: T): T {
    return new Proxy(props, {
      get: <K extends keyof T>(target: T, prop: K): T[K] => {
        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },

      set: <K extends keyof T>(target: T, prop: K, value: T[K]): boolean => {
        const prevProps = { ...target };

        // eslint-disable-next-line no-param-reassign
        target[prop] = value;

        if (prevProps[prop] !== target[prop]) {
          this.eventBus().emit(EBlockEvents.MOUNT, prevProps, target);
        }

        return true;
      },

      deleteProperty: (): never => {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show(): void {
    const content = this.getContent();

    if (content) {
      content.style.display = 'block';
    }
  }

  hide(): void {
    const content = this.getContent();

    if (content) {
      content.style.display = 'none';
    }
  }
}
