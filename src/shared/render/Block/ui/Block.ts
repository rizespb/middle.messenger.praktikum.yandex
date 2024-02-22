import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { EventBus } from '@/shared/services';
import {
  EBlockEvents,
  IBlockProps,
  TAnyObject,
  TBlockEventBus,
  TEvents,
  TClearProps,
  addListeners,
  removeListeners,
  IBlock,
  IChildren,
} from '../model';

export class Block<T extends IBlockProps = IBlockProps> implements IBlock<T> {
  private tagName: string;

  public id: TUuid;

  private _element: HTMLElement;

  protected props: TClearProps<T>;

  // eslint-disable-next-line no-use-before-define
  protected children: IChildren;

  protected events: TEvents;

  public renderCount = 0;

  // Надо ли произвести ререндер
  private shouldRerender = false;

  private eventBus: () => TBlockEventBus;

  constructor(propsAndChildren: T, tagName = 'div') {
    const eventBus = new EventBus<EBlockEvents>();
    this.tagName = tagName;

    this._createResources();

    this.id = makeUUID();

    const { props, children, events } = this._separateProps(propsAndChildren);

    // Оборачиваем объект в прокси, чтобы при установке новых пропсов методом setProps эммитить событие component-did-update
    this.props = this._makePropsProxy({ ...props });

    this.children = this._makePropsProxy({ ...children });

    this.events = events;

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
  protected getInternalChildren(): IChildren {
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
    const internalEvents = this.getInternalEvents();

    this.events = {
      ...this.events,
      ...internalEvents,
    };
  }

  private init(): void {
    this._createResources();

    this.eventBus().emit(EBlockEvents.RENDER);
  }

  private _componentDidMount(props: TClearProps<T>): void {
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
  protected componentDidMount(_props: TClearProps<T>): void {}

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected componentDidUpdate(_oldProps: TClearProps<T>, _newProps: TClearProps<T>): boolean {
    return true;
  }

  // Отделяем пропсы от children и events
  private _separateProps(propsAndChildren: T): {
    children: IChildren;
    props: TClearProps<T>;
    events: TEvents;
  } {
    const children: IChildren = propsAndChildren.children || {};
    const events: TEvents = propsAndChildren.events || {};

    const props = { ...propsAndChildren };
    delete props.children;
    delete props.events;

    return { props, children, events };
  }

  public setProps = (nextProps: Partial<TClearProps<T>>): void => {
    if (!nextProps) {
      return;
    }

    const prevProps = { ...this.props };

    Object.assign(this.props, nextProps);

    if (this.shouldRerender) {
      this.eventBus().emit(EBlockEvents.UPDATE, prevProps, nextProps);
    }

    this.shouldRerender = false;
  };

  public setChildren = (nextChildren: Partial<T['children']>): void => {
    if (!nextChildren) {
      return;
    }

    Object.assign(this.children, nextChildren);

    if (this.shouldRerender) {
      this.eventBus().emit(EBlockEvents.UPDATE, this.props, this.props);
    }

    this.shouldRerender = false;
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

  private _makePropsProxy<Obj extends object>(obj: Obj): Obj {
    return new Proxy(obj, {
      get: <K extends keyof Obj & string>(target: Obj, prop: K): Obj[K] => {
        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },

      set: <K extends keyof Obj & string>(target: Obj, prop: K, value: Obj[K]): boolean => {
        const prevProps = { ...target };

        // eslint-disable-next-line no-param-reassign
        target[prop] = value;

        if (prevProps[prop] !== target[prop]) {
          this.shouldRerender = true;
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
    const propsAndStubs: TAnyObject = { ...this.props };

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
  private getChildrenStrubs(child: IBlock[], fragment: HTMLTemplateElement): Element[] {
    const stubs = child.map(
      (item) => fragment.content.querySelector(`[data-id="${item.id}"]`) as Element
    );

    return stubs;
  }

  // Заменяем стабы на реальные эелементы, когда в ребенке пришел массив элементов
  private replaceStubs(stubs: Element[], child: IBlock[]): void {
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
    addListeners(this._element, this.events);
  }

  private _removeEvents(): void {
    if (this.renderCount === 0) {
      return;
    }

    removeListeners(this._element, this.events);
  }
}
