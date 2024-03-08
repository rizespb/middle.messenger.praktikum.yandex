import { INavLink, Navigation } from '@/widgets/Navigation';
import { render } from '@/shared/render';
import { router } from '@/entities/Router';
import { APP_CONTAINER_ID, routes } from '../contstants';
import { registerRoutes } from './registerRoutes';
import { initStore } from './initStore';

export const startApp = (): void => {
  const appContainerSelector = `#${APP_CONTAINER_ID}`;

  initStore();

  router.init(appContainerSelector);

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
