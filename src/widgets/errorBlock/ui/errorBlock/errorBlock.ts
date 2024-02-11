import { compile } from '@/shared/utils';
import classes from './errorBlock.module.scss';
import tmpl from './errorBlock.hbs?raw';
import { CHATS_PAGE_URL, TEXTS } from './errorBlock.constants';
import { IErrorBlockProps } from './errorBlock.interfaces';

export const errorBlock = (props: IErrorBlockProps): THtml =>
  compile(tmpl)({
    ...props,
    classes,
    linkUrl: CHATS_PAGE_URL,
    linkTitle: TEXTS.linkTitle,
  });
