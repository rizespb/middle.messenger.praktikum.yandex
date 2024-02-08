import { compile } from '@/shared/utils';
import tmpl from './button.hbs?raw';
import classes from './button.module.scss';
import { IButtonProps } from './button.interfaces';

export const button = (props: IButtonProps): THtml =>
  compile(tmpl)({
    ...props,
    classes,
  });
