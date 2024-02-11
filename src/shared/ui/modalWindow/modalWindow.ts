import { compile } from 'handlebars';
import { classNames } from '@/shared/utils';
import tmpl from './modalWindow.hbs?raw';
import { IModalWindowProps } from './modalWindow.interface';
import classes from './modalWindow.module.scss';

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
