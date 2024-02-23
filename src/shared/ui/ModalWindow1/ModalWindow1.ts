import { classNames } from '@/shared/utils';
import { Block } from '@/shared/render';
import tmpl from './ModalWindow.hbs?raw';
import { IModalWindowProps } from './ModalWindow.interface';
import classes from './ModalWindow.module.scss';

export class ModalWindow extends Block<IModalWindowProps> {
  render(): DocumentFragment {
    const headingClasses = classNames({
      [classes.heading]: true,
      [classes.heading__error]: this.props.titleColor === 'error',
    });

    return this.compile(tmpl, { classes, headingClasses });
  }
}
