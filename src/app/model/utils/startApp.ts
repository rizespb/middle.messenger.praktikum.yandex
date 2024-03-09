import { INavLink, Navigation } from '@/widgets/Navigation';
import { render } from '@/shared/render';
import { router } from '@/entities/Router';
import { Error404Page } from '@/pages/Error404Page';
import { APP_CONTAINER_ID, routes } from '../contstants';
import { registerRoutes } from './registerRoutes';
import { initStore } from './initStore';

export const startApp = (): void => {
  const appContainerSelector = `#${APP_CONTAINER_ID}`;

  initStore();

  const checkIsUserLoggedIn = (): boolean => appStore.getState().isLoggedIn;

  router.init(appContainerSelector, checkIsUserLoggedIn, Error404Page);

  registerRoutes(router, routes);

  const navLinks = routes.reduce<INavLink[]>((acc, route) => {
    const { pathname, title } = route;

    if (title) {
      acc.push({
        href: pathname,
        text: title,
      });
    }

    return acc;
  }, []);

  const navigation = new Navigation({ links: navLinks });

  render(appContainerSelector, navigation);
};
