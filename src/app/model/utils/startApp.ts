import { router } from '@/entities/Router';
import { Error404Page } from '@/pages/Error404Page';
import { render } from '@/shared/render';
import { APP_CONTAINER_ID, routes } from '../contstants';
import { registerRoutes } from './registerRoutes';
import { initStore } from './initStore';
import { initApp } from './initApp';
// import { renderNavigation } from './renderNavigation';

export const startApp = (): void => {
  const appContainerSelector = `#${APP_CONTAINER_ID}`;

  initStore();
  initApp();

  render(appContainerSelector, appStore.getState().initialPage);

  const checkIsProtectedRoutesAllowed = (): boolean => appStore.getState().user !== null;

  router.init(appContainerSelector, checkIsProtectedRoutesAllowed, Error404Page);

  registerRoutes(router, routes);

  // renderNavigation(appContainerSelector);
};
