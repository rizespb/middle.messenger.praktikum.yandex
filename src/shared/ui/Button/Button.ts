import { classNames } from '@/shared/utils';
import { Block } from '@/shared/render';
import tmpl from './Button.hbs?raw';
import classes from './Button.module.scss';
import { IButtonProps } from './Button.interfaces';

export class Button extends Block<IButtonProps> {
  render(): DocumentFragment {
    const { className = '', kind } = this.props;

    const buttonClasses = classNames({
      [classes.button]: true,
      [classes.button__primary]: kind === 'primary',
      [classes.button__secondary]: kind === 'secondary',
      [classes.button__tertiary]: kind === 'tertiary',
      [className]: Boolean(className),
    });

    return this.compile(tmpl, { className: buttonClasses });
  }
}
