import { classNames } from '@/shared/utils';
import { Block } from '@/shared/render';
import { IPopupUpProps } from './Popup.interfaces';
import tmpl from './Popup.hbs?raw';
import classes from './Popup.module.scss';

export class Popup extends Block<IPopupUpProps> {
  protected componentDidMount(): void {
    window.addEventListener('click', () => {
      this.setProps({ isPopupOpened: false });
    });
  }

  render(): DocumentFragment {
    const { direction, isPopupOpened } = this.props;

    const popupClasses = classNames({
      [classes.popup]: true,
      [classes.popup__bottomRight]: direction === 'bottomRight',
      [classes.popup__topLeft]: direction === 'topLeft',
      [classes.popup__hidden]: !isPopupOpened,
    });

    return this.compile(tmpl, { classes, popupClasses });
  }
}
