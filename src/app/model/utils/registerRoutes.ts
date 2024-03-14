import { Router } from '@/shared/router';
import { IRouteData } from '../types';

export const registerRoutes = (router: Router, routes: IRouteData[]): void => {
  routes.reduce<Router>((acc, route) => {
    const { pathname, block, isProtected } = route;

    acc.use(pathname, block, isProtected);

    return acc;
  }, router);
};
