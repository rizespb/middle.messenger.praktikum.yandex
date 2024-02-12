import { compile } from '@/shared/utils';
import { ICenterContentLayoutProps } from './centerContentLayout.interfaces';
import classes from './centerContentLayout.module.scss';
import tmpl from './centerContentLayout.hbs?raw';

export const centerContentLayout = (props: ICenterContentLayoutProps): THtml =>
  compile(tmpl)({ ...props, classes });
