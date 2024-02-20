import { Block } from '@/shared/render';
import { IActionProps } from './PopupAction.interfaces';
import tmpl from './PopupAction.hbs?raw';
import classes from './PopupAction.module.scss';

export class PopupAction extends Block<IActionProps> {
  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
