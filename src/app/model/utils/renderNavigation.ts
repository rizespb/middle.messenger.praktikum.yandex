import { INavLink, Navigation } from '@/widgets/Navigation';
import { render } from '@/shared/render';
import { routes } from '../contstants';

export const renderNavigation = (appContainerSelector: string): void => {
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
