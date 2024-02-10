import { classNames, compile } from '@/shared/utils';
import { IPopupUpProps } from './popup.interface';
import tmpl from './popup.hbs?raw';
import classes from './popup.module.scss';

export const popup = (props: IPopupUpProps): THtml => {
  const { actions, direction } = props;

  const popupClasses = classNames({
    [classes.popup]: true,
    [classes.popup__bottomRight]: direction === 'bottomRight',
    [classes.popup__topLeft]: direction === 'topLeft',
  });

  return compile(tmpl)({ actions, popupClasses, classes });
};
