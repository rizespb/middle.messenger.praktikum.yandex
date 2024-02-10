import { compile } from '@/shared/utils';
import classes from './chatPreview.module.scss';
import tmpl from './chatPreview.hbs?raw';
import { IChatPreviewProps } from './chatPreview.interfaces';

export const chatPreview = (props: IChatPreviewProps): THtml =>
  compile(tmpl)({
    ...props,
    classes,
  });
