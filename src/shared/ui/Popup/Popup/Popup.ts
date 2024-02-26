import { classNames } from '@/shared/utils';
import { Block } from '@/shared/render';
import { IPopupUpProps } from './Popup.interfaces';
import tmpl from './Popup.hbs?raw';
import classes from './Popup.module.scss';

export class Popup extends Block<IPopupUpProps> {
  render(): DocumentFragment {
    const { direction } = this.props;

    const popupClasses = classNames({
      [classes.popup]: true,
      [classes.popup__bottomRight]: direction === 'bottomRight',
      [classes.popup__topLeft]: direction === 'topLeft',
    });

    return this.compile(tmpl, { classes, popupClasses });
  }
}
