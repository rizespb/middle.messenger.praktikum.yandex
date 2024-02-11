import { navigation, setNavigationClickEventListener } from '@/widgets/navigation';
import { EPages } from '@/shared/constants';
import { getPage } from './getPage';
import { currentPage, setPage } from './setPage';
import { APP_CONTAINER_ID } from '../contstants';

export const renderPage = (): void => {
  const root = document.getElementById(APP_CONTAINER_ID);

  if (!root) {
    throw new Error('root not found');
  }

  const page = getPage(currentPage);

  const pageHtml = page();

  const navigationHtml = navigation();

  const result = `${pageHtml}${navigationHtml}`;

  root.innerHTML = result;

  const onNavItemClick = (pageCode: EPages): void => {
    setPage(pageCode);
    renderPage();
  };

  setNavigationClickEventListener(onNavItemClick);
};
