import { navigationTmpl, pagesMap, setNavigationClickEventListener } from '@/widgets/navigation';
import { EPages } from '@/shared/constants';
import { compile } from '@/shared/utils';
import { getPage } from './getPage';
import { currentPage, setPage } from './setPage';

export const renderPage = () => {
  const page = getPage(currentPage);

  const root = document.getElementById('app');

  if (!root) {
    throw new Error('root not found');
  }

  const pageStr = compile(page, {
    userName: 'John Doe',
  });

  const navigationStr = compile(navigationTmpl, {
    pagesMap,
  });

  const result = pageStr + navigationStr;

  root.innerHTML = result;

  const onNavItemClick = (pageCode: EPages): void => {
    setPage(pageCode);
    renderPage();
  };

  setNavigationClickEventListener(onNavItemClick);
};
