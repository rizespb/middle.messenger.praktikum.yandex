import { compile } from 'handlebars';
import tmpl from './modalWindow.hbs?raw';
import { IModalWindowProps } from './modalWindow.interface';
import classes from './modalWindow.module.scss';

export const modalWindow = (props: IModalWindowProps): THtml =>
  compile(tmpl)({
    ...props,
    classes,
  });
