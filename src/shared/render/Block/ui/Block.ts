import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { EventBus } from '@/shared/services';
import {
  EBlockEvents,
  IBlockProps,
  IChildren,
  TAnyObject,
  TBlockEventBus,
  TEvents,
  TPropsWithOutChildren,
  addListeners,
  removeListeners,
} from '../model';

export class Block<T extends IBlockProps = IBlockProps> {
  private tagName: string;

  private eventBus: () => TBlockEventBus;

  private _element: HTMLElement;

  protected props: TPropsWithOutChildren<T>;

  public renderCount = 0;

  public id: TUuid;

  // eslint-disable-next-line no-use-before-define
  protected children: IChildren<Block>;

  protected internalEvents: TEvents = {};

  constructor(propsAndChildren: T = {} as T, tagName = 'div') {
    const eventBus = new EventBus<EBlockEvents>();
    this.tagName = tagName;

    this._createResources();

    this.id = makeUUID();

    const { props, children } = this._getChildren(propsAndChildren);

    // Оборачиваем объект в прокси, чтобы при установке новых пропсов методом setProps эммитить событие component-did-update
    this.props = this._makePropsProxy({ ...props });

    this.children = children;

    this.setInternalChildren();

    this.setInternalListeners();

    this.eventBus = (): TBlockEventBus => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EBlockEvents.INIT);
  }

  private _registerEvents(eventBus: TBlockEventBus): void {
    eventBus.on(EBlockEvents.INIT, this.init.bind(this));
    eventBus.on(EBlockEvents.MOUNT, this._componentDidMount.bind(this));
    eventBus.on(EBlockEvents.UPDATE, this._componentDidUpdate.bind(this));
    eventBus.on(EBlockEvents.RENDER, this._render.bind(this));
  }

  protected _createResources(): void {
    this._element = this._createDocumentElement(this.tagName);
  }

  public get element(): HTMLElement {
    return this._element;
  }

  public getContent(): HTMLElement {
    return this.element;
  }

  // Определение списка "внутренних" дочерних компонентов - компонентов, которые не передаются в пропсах, а определяются внутри текущего компонента
  protected getInternalChildren(): IChildren<Block> {
    return {};
  }

  // Создание дочерних компонентов внутри конструктора (не переданных через props)
  private setInternalChildren(): void {
    const internalChildren = this.getInternalChildren();

    this.children = {
      ...this.children,
      ...internalChildren,
    };
  }

  // Определение списка "внутренних" обработчиков - обработчики, которые не передаются в пропсах, а определяются внутри компонента
  protected getInternalEvents(): TEvents {
    return {};
  }

  private setInternalListeners(): void {
    this.internalEvents = this.getInternalEvents();
  }

  private init(): void {
    this._createResources();

    this.eventBus().emit(EBlockEvents.RENDER);
  }

  private _componentDidMount(props: T): void {
    this.componentDidMount(props);

    // Эммитим событие MOUNT в детях
    Object.values(this.children).forEach((child) => {
      const isArray = Array.isArray(child);

      if (isArray) {
        child.forEach((item) => {
          item.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
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
  protected componentDidMount(_props: T): void {}

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected componentDidUpdate(_oldProps: T, _newProps: T): boolean {
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
      const isBlockOrBlockArray =
        value instanceof Block ||
        (Array.isArray(value) && value.every((item) => item instanceof Block));

      if (isBlockOrBlockArray) {
        children[key] = value;

        return;
      }

      props[key as keyof TPropsWithOutChildren<T>] = value;
    });

    return { children, props } as {
      children: IChildren<Block>;
      props: TPropsWithOutChildren<T>;
    };
  }

  public setProps = (nextProps: T): void => {
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
  protected render(): DocumentFragment {
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
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков

    return document.createElement(tagName);
  }

  protected compile(template: string, additioanlProps?: TAnyObject): DocumentFragment {
    // Объект, в котором будут собраны пропсы и загулшки для чилдренов
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const propsAndStubs = { ...this.props } as any;

    // При вставке дочернего элемента в шаблон шаблонизатор приведет дочерний элемент к примитиву ([object Object]). Элементы в DOM и элементы в пропсах будут разными. Чтобы не потерять дочерние элементы, используем вначале заглушки
    // Добавляем заглушки вместо чилдренов
    Object.entries(this.children).forEach(([key, child]) => {
      const isArray = Array.isArray(child);

      const stub = isArray
        ? child.map((item) => `<div data-id="${item.id}"></div>`)
        : `<div data-id="${child.id}"></div>`;

      propsAndStubs[key] = stub;
    });

    // Создаем элемент <template>, который не отображается в реальном DOM
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    // Помещаем во фрагмент наш элемент
    fragment.innerHTML = Handlebars.compile(template)({ ...propsAndStubs, ...additioanlProps });

    // Заменяем все заглушки children-ов на реальные эелменты
    // Child может быть как самостоятельным элементом, так и массивом элементов
    Object.values(this.children).forEach((child) => {
      const isArray = Array.isArray(child);

      if (!isArray) {
        const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

        stub?.replaceWith(child.getContent());

        return;
      }

      const stubs = this.getChildrenStrubs(child, fragment);
      this.replaceStubs(stubs, child);
    });

    return fragment.content;
  }

  // Создаем стабы в случае, когда в ребенке пришел массив элементов
  private getChildrenStrubs(child: Block[], fragment: HTMLTemplateElement): Element[] {
    const stubs = child.map(
      (item) => fragment.content.querySelector(`[data-id="${item.id}"]`) as Element
    );

    return stubs;
  }

  // Заменяем стабы на реальные эелементы, когда в ребенке пришел массив элементов
  private replaceStubs(stubs: Element[], child: Block[]): void {
    stubs.forEach((stub, index) => {
      stub.replaceWith(child[index].getContent());
    });
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

    addListeners(this._element, events);
    addListeners(this._element, this.internalEvents);
  }

  private _removeEvents(): void {
    if (this.renderCount === 0) {
      return;
    }

    const { events = {} } = this.props;

    removeListeners(this._element, events);
    removeListeners(this._element, this.internalEvents);
  }
}
