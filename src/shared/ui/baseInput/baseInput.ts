import { compile } from 'handlebars';
import { IBaseInputProps } from './baseInput.interfaces';
import tmpl from './baseInput.hbs?raw';
import classes from './baseInput.module.scss';

export const baseInput = (props: IBaseInputProps): THtml =>
  compile(tmpl)({
    ...props,
    classes,
  });
