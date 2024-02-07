import { EPages } from '@/shared/constants';

export const setNavigationClickEventListener = (onNavItemClick: (pageCode: EPages) => void) => {
  const navigationNode = document.querySelector('nav');

  navigationNode.addEventListener('click', (event): void => {
    const { target } = event;

    if (!(target instanceof Element)) {
      return;
    }

    const pageCode = target.getAttribute('data-page-code');

    const isValidPageCode = (code: string): code is EPages =>
      Object.values(EPages).includes(code as EPages);

    if (!isValidPageCode(pageCode)) {
      return;
    }
    onNavItemClick(pageCode);
  });
};
