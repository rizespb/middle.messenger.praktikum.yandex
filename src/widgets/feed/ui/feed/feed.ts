import { compile } from '@/shared/utils';
import classes from './feed.module.scss';
import tmpl from './feed.hbs?raw';

export const feed = (): THtml => compile(tmpl)({ classes });
