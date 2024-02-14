import { compile } from '@/shared/utils';
import { EPages } from '@/shared/constants';
import { PAGE_CODE_ATTR_TITLE, TEXTS, pagesMap } from './navigation.constants';
import classes from './navigation.module.scss';
import tmpl from './navigation.hbs?raw';

// Временная реализация навигации
export const navigation = (): THtml =>
  compile(tmpl)({
    classes,
    pagesMap,
    dataAttrTitle: PAGE_CODE_ATTR_TITLE,
  });

export const setNavigationClickEventListener = (
  onNavItemClick: (pageCode: EPages) => void
): void => {
  const navigationNode = document.querySelector('nav');

  if (navigationNode === null) {
    throw new Error(TEXTS.navigationNotFound);
  }

  navigationNode.addEventListener('click', (event): void => {
    const { target } = event;

    if (!(target instanceof Element)) {
      return;
    }

    const pageCode = target.getAttribute(PAGE_CODE_ATTR_TITLE);

    const isValidPageCode = (code: string | null): code is EPages =>
      Object.values(EPages).includes(code as EPages);

    if (!isValidPageCode(pageCode)) {
      return;
    }

    onNavItemClick(pageCode);
  });
};
