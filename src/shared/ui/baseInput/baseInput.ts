import { compile } from 'handlebars';
import tmpl from './baseInput.hbs?raw';
import { IBaseInputProps } from './baseInput.interfaces';
import classes from './baseInput.module.scss';

export const baseInput = (props: IBaseInputProps): THtml =>
  compile(tmpl)({
    ...props,
    classes,
  });
