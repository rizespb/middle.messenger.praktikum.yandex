import { EPagesUrls } from '@/shared/constants';
import { EventBus } from '@/shared/services';
import { Route, TBlockClass } from '../Route';
import { ERouterEvents } from './Router.interfaces';

export class Router extends EventBus<ERouterEvents> {
  // eslint-disable-next-line no-use-before-define
  static instance: Router;

  routes: Route[];

  history: History;

  _currentRoute: Route | null;

  _rootQuery: string | null = null;

  _notFoundPageRoute: Route | null = null;

  _checkIsProtectedRoutesAllowed: () => boolean | undefined;

  constructor() {
    super();

    if (Router.instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.instance;
    }

    this.routes = [];
    this.history = window.history;

    Router.instance = this;
  }

  init(
    rootQuery: string,
    checkIsProtectedRoutesAllowed: () => boolean,
    notFoundPage: TBlockClass
  ): void {
    this._rootQuery = rootQuery;
    this._checkIsProtectedRoutesAllowed = checkIsProtectedRoutesAllowed;

    const notFoundPageRoute = new Route(EPagesUrls.Error404, notFoundPage, {
      rootQuery: this._rootQuery as string,
      isProtected: false,
    });

    this._notFoundPageRoute = notFoundPageRoute;
  }

  // Инициализация существующих в приложении роутов и соответствующих им компонентов (страниц)
  use(pathname: string, block: TBlockClass, isProtected: boolean): Router {
    this._checkIsRouterInitialized();

    const route = new Route(pathname, block, {
      rootQuery: this._rootQuery as string,
      isProtected,
    });

    this.routes.push(route);

    return this;
  }

  // Регистрируем обработчик, который будет срабатывать, если пользователь навигируется с помощью кнопок Вперед/Назад или метода history.go() или history.forward() (вперед - эквивалент history.go(1))
  start(): void {
    this._checkIsRouterInitialized();

    // Это событие НЕ будет эммититься при вызове history.pushState и history.repalceState - их надо обрабатывать отдельно («вручную»)
    window.onpopstate = (event: PopStateEvent): void => {
      if (event.currentTarget) {
        this._onRoute((event.currentTarget as Window).location.pathname);

        this.emit(ERouterEvents.PopState);
      }
    };

    this._onRoute(window.location.pathname);
  }

  // Отрисовка страницы, соответствующей переданному pathname
  _onRoute(pathname: string): void {
    this._checkIsRouterInitialized();

    const route = this.getRoute(pathname) || this._notFoundPageRoute;

    if (route === null) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    if (route.isProtected && !this._checkIsProtectedRoutesAllowed()) {
      const mainPage = this.getRoute(EPagesUrls.LogInPage) || this._notFoundPageRoute;
      mainPage?.render();
      this.history.replaceState({}, '', EPagesUrls.LogInPage);

      this._currentRoute = mainPage;

      return;
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);

    this.emit(ERouterEvents.PopState);
  }

  back(): void {
    this.history.go(-1);

    this.emit(ERouterEvents.PopState);
  }

  forward(): void {
    this.history.forward();

    this.emit(ERouterEvents.PopState);
  }

  getRoute(pathname: string): Route | null {
    return this.routes.find((route) => route.match(pathname)) || null;
  }

  _checkIsRouterInitialized(): void {
    if (this._rootQuery === null) {
      throw new Error('Router is not initialized: root container query is not defined');
    }

    if (this._checkIsProtectedRoutesAllowed === undefined) {
      throw new Error('Router is not initialized: _checkIsProtectedRoutesAllowed is not defined');
    }

    if (this._notFoundPageRoute === null) {
      throw new Error('Router is not initialized: _notFoundPageRoute is not defined');
    }
  }
}
