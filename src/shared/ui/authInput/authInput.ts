import { compile } from 'handlebars';
import tmpl from './authInput.hbs?raw';
import { IAuthInputProps } from './authInput.interfaces';
import classes from './authInput.module.scss';

export const authInput = (props: IAuthInputProps): THtml =>
  compile(tmpl)({
    ...props,
    classes,
  });
