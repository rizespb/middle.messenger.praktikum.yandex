import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { EventBus } from '../eventBus/eventBus';
import {
  EBlockEvents,
  IBaseProps,
  IChildren,
  TBlockEventBus,
  TPropsWithOutChildren,
} from './Block.interfaces';

export class Block<T extends IBaseProps = IBaseProps> {
  private tagName: string;

  private eventBus: () => TBlockEventBus;

  private _element: null | HTMLElement = null;

  protected props: TPropsWithOutChildren<T>;

  public renderCount = 0;

  public id: TUuid;

  // eslint-disable-next-line no-use-before-define
  protected children: IChildren<Block>;

  constructor(propsAndChildren: T = {} as T, tagName = 'div') {
    const eventBus = new EventBus<EBlockEvents>();
    this.tagName = tagName;

    this.id = makeUUID();

    const { props, children } = this._getChildren(propsAndChildren);

    // Оборачиваем объект в прокси, чтобы при установке новых пропсов методом setProps эммитить событие component-did-update
    this.props = this._makePropsProxy({ ...props });

    this.children = children;

    this.eventBus = (): TBlockEventBus => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EBlockEvents.INIT);
  }

  _registerEvents(eventBus: TBlockEventBus): void {
    eventBus.on(EBlockEvents.INIT, this.init.bind(this));
    eventBus.on(EBlockEvents.MOUNT, this._componentDidMount.bind(this));
    eventBus.on(EBlockEvents.UPDATE, this._componentDidUpdate.bind(this));
    eventBus.on(EBlockEvents.RENDER, this._render.bind(this));
  }

  _createResources(): void {
    this._element = this._createDocumentElement(this.tagName);
  }

  get element(): HTMLElement | null {
    return this._element;
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  init(): void {
    this._createResources();

    this.eventBus().emit(EBlockEvents.RENDER);
  }

  private _componentDidMount(props: T): void {
    this.componentDidMount(props);

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  // Эммитим событие маунта для вызова componentDidMount
  public dispatchComponentDidMount(): void {
    this.eventBus().emit(EBlockEvents.MOUNT, this.props);
  }

  private _componentDidUpdate(oldProps: T, newProps: T): void {
    // Если пользовательский componentDidUpdate вернет false, значит компонент перерисовывать не надо
    // componentDidUpdate можно не переопределять, по умолчанию возвращает true - перерисовка на каждое изменение пропсов
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this._render();
    }
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(props: T): void {}

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps: T, newProps: T): boolean {
    return true;
  }

  // Отделяем пропсы от children
  private _getChildren(propsAndChildren: T): {
    children: IChildren<Block>;
    props: TPropsWithOutChildren<T>;
  } {
    const children: IChildren<Block> = {};
    const props = {} as TPropsWithOutChildren<T>;

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key as keyof TPropsWithOutChildren<T>] = value;
      }
    });

    return { children, props } as {
      children: IChildren<Block>;
      props: TPropsWithOutChildren<T>;
    };
  }

  setProps = (nextProps: T): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  private _render(): void {
    const block = this.render();

    const innerElement = block.firstElementChild;

    if (!this._element || !innerElement) {
      return;
    }

    this._removeEvents();

    // Заменяем прежний элемент в DOM
    this._element.replaceWith(innerElement);

    // Меняем ссылку в экземпляре с элемента-контейнера на наш элемент из шаблона
    this._element = innerElement as HTMLElement;

    this._addEvents();
    this.renderCount += 1;
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render(): DocumentFragment {
    return new DocumentFragment();
  }

  private _makePropsProxy(props: TPropsWithOutChildren<T>): TPropsWithOutChildren<T> {
    return new Proxy(props, {
      get: <K extends keyof TPropsWithOutChildren<T>>(
        target: T,
        prop: string
      ): TPropsWithOutChildren<T>[K] => {
        const value = target[prop as K];

        return typeof value === 'function' ? value.bind(target) : value;
      },

      set: <K extends keyof TPropsWithOutChildren<T>>(
        target: T,
        prop: string,
        value: T[K]
      ): boolean => {
        const prevProps = { ...target };

        // eslint-disable-next-line no-param-reassign
        target[prop as K] = value;

        if (prevProps[prop as K] !== target[prop as K]) {
          this.eventBus().emit(EBlockEvents.UPDATE, prevProps, target);
        }

        return true;
      },

      deleteProperty: (): never => {
        throw new Error('Нет доступа');
      },
    });
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    // // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    // const element = document.createElement(tagName);

    // element.setAttribute('data-id', this.id);

    return document.createElement(tagName);
  }

  protected compile(template: string, classes?: Record<string, string>): DocumentFragment {
    // Объект, в котором будут собраны пропсы и загулшки для чилдренов
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const propsAndStubs = { ...this.props } as any;

    // Добавляем заглушки вместо чилдренов
    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    // Создаем элемент <template>, который не отображается в реальном DOM
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    // Помещаем во фрагмент наш элемент
    fragment.innerHTML = Handlebars.compile(template)({ ...propsAndStubs, classes });

    // Заменяем все заглушки
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

      stub?.replaceWith(child.getContent()!);
    });

    return fragment.content;
  }

  public show(): void {
    const content = this.getContent();

    if (content) {
      content.style.display = 'block';
    }
  }

  public hide(): void {
    const content = this.getContent();

    if (content) {
      content.style.display = 'none';
    }
  }

  private _addEvents(): void {
    const { events = {} } = this.props;

    (Object.keys(events) as Array<keyof GlobalEventHandlersEventMap>).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]!);
    });
  }

  private _removeEvents(): void {
    if (this.renderCount === 0) {
      return;
    }

    const { events = {} } = this.props;

    (Object.keys(events) as Array<keyof GlobalEventHandlersEventMap>).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]!);
    });
  }
}
