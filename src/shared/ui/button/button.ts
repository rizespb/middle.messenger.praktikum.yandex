import { classNames, compile } from '@/shared/utils';
import tmpl from './button.hbs?raw';
import classes from './button.module.scss';
import { IButtonProps } from './button.interfaces';

export const button = (props: IButtonProps): THtml => {
  const { className, kind } = props;

  const buttonClasses = classNames({
    [classes.button]: true,
    [classes.button__primary]: kind === 'primary',
    [classes.button__secondary]: kind === 'secondary',
    [classes.button__tertiary]: kind === 'tertiary',
    [className]: Boolean(className),
  });

  return compile(tmpl)({
    ...props,
    className: buttonClasses,
  });
};
