import { Block } from '@/shared/render';
import { Route } from '../Route';

export class Router {
  // eslint-disable-next-line no-use-before-define
  static instance: Router;

  routes: Route[];

  history: History;

  _currentRoute: Route | null;

  _rootQuery: string | null = null;

  _notFoundPageRoute: Route | null = null;

  constructor() {
    if (Router.instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.instance;
    }

    this.routes = [];
    this.history = window.history;

    Router.instance = this;
  }

  init(rootQuery: string): void {
    this._rootQuery = rootQuery;
  }

  // Инициализация существующих в приложении роутов и соответствующих им компонентов (страниц)
  use(pathname: string, block: new () => Block): Router {
    if (this._rootQuery === null) {
      throw new Error('Router is not initialized');
    }

    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);

    if (pathname === '/404') {
      this._notFoundPageRoute = route;
    }

    return this;
  }

  // Регистрируем обработчик, который будет срабатывать, если пользователь навигируется с помощью кнопок Вперед/Назад или метода history.go() или history.forward() (вперед - эквивалент history.go(1))
  start(): void {
    // Это событие НЕ будет эммититься при вызове history.pushState и history.repalceState - их надо обрабатывать отдельно («вручную»)
    window.onpopstate = (event: PopStateEvent): void => {
      if (event.currentTarget) {
        this._onRoute((event.currentTarget as Window).location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  // Отрисовка страницы, соответствующей переданному pathname
  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname) || this._notFoundPageRoute;

    if (route === null) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back(): void {
    this.history.go(-1);
  }

  forward(): void {
    this.history.forward();
  }

  getRoute(pathname: string): Route | null {
    return this.routes.find((route) => route.match(pathname)) || null;
  }
}
