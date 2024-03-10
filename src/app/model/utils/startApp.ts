import { router } from '@/entities/Router';
import { Error404Page } from '@/pages/Error404Page';
import { APP_CONTAINER_ID, routes } from '../contstants';
import { registerRoutes } from './registerRoutes';
import { initStore } from './initStore';
// import { renderNavigation } from './renderNavigation';

export const startApp = (): void => {
  const appContainerSelector = `#${APP_CONTAINER_ID}`;

  initStore();

  const checkIsUserLoggedIn = (): boolean => appStore.getState().isLoggedIn;

  router.init(appContainerSelector, checkIsUserLoggedIn, Error404Page);

  registerRoutes(router, routes);

  // renderNavigation(appContainerSelector);
};
