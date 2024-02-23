import { Block } from '@/shared/render';
import classes from './ErrorBlock.module.scss';
import tmpl from './ErrorBlock.hbs?raw';
import { IErrorBlockProps } from './ErrorBlock.interfaces';
import { CHATS_PAGE_URL, TEXTS } from './ErrorBlock.constants';

export class ErrorBlock extends Block<IErrorBlockProps> {
  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      linkUrl: CHATS_PAGE_URL,
      linkTitle: TEXTS.linkTitle,
    });
  }
}
