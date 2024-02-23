import { EPages } from '@/shared/constants';
import { Block, TEvents } from '@/shared/render';
import { PAGE_CODE_ATTR_TITLE, pagesMap } from './Navigation.constants';
import classes from './Navigation.module.scss';
import tmpl from './Navigation.hbs?raw';
import { INavigationProps } from './Navigation.interfaces';

// Временная реализация навигации
export class Navigation extends Block<INavigationProps> {
  handleNavItemClick(event: MouseEvent): void {
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

    this.props.onNavItemClick(pageCode);
  }

  protected getInternalEvents(): TEvents {
    return {
      click: this.handleNavItemClick.bind(this),
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      pagesMap,
      dataAttrTitle: PAGE_CODE_ATTR_TITLE,
    });
  }
}
