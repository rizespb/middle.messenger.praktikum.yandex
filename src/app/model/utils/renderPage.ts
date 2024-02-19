// import { navigation, setNavigationClickEventListener } from '@/widgets/navigation';
// import { EPages } from '@/shared/constants';
import { render } from '@/shared/render';
import { Navigation } from '@/widgets/Navigation';
import { EPages } from '@/shared/constants';
import { getPage } from './getPage';
// import { currentPage, setPage } from './setPage';
import { currentPage, setPage } from './setPage';
import { APP_CONTAINER_ID } from '../contstants';

export const renderPage = (): void => {
  const root = document.getElementById(APP_CONTAINER_ID);

  if (!root) {
    throw new Error('Root not found');
  }

  root.innerHTML = '';

  const page = getPage(currentPage);

  const appContainerSelector = `#${APP_CONTAINER_ID}`;

  render(appContainerSelector, page);

  const navigation = new Navigation({
    onNavItemClick: (pageCode: EPages): void => {
      setPage(pageCode);
      renderPage();
    },
  });

  render(appContainerSelector, navigation);
};
