import { Block } from '@/shared/render';
import { IPopupActionProps } from './PopupAction.interfaces';
import tmpl from './PopupAction.hbs?raw';
import classes from './PopupAction.module.scss';

export class PopupAction extends Block<IPopupActionProps> {
  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
