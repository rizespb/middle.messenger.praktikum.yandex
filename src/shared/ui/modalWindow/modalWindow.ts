import { compile } from 'handlebars';
import { classNames } from '@/shared/utils';
import { Block } from '@/shared/render';
import tmpl from './ModalWindow.hbs?raw';
import { IModalWindowProps } from './ModalWindow.interface';
import classes from './ModalWindow.module.scss';

export const modalWindow = (props: IModalWindowProps): THtml => {
  const { content, title, titleColor } = props;

  const headingClasses = classNames({
    [classes.heading]: true,
    [classes.heading__error]: titleColor === 'error',
  });

  return compile(tmpl)({
    classes,
    headingClasses,
    content,

    title,
  });
};

export class ModalWindow extends Block<IModalWindowProps> {
  render(): DocumentFragment {
    return this.compile('<div>ModalWindow</div>', { classes });
  }
}
