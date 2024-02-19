import { Block } from '@/shared/render';
import { ICenterContentLayoutProps } from './CenterContentLayout.interfaces';
import classes from './CenterContentLayout.module.scss';
import tmpl from './CenterContentLayout.hbs?raw';

export class CenterContentLayout extends Block<ICenterContentLayoutProps> {
  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
