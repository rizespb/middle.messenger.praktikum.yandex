import { Block, IChildren } from '@/shared/render';
import { Link } from '@/entities/Router';
import { EPagesUrls } from '@/shared/constants';
import classes from './ErrorBlock.module.scss';
import tmpl from './ErrorBlock.hbs?raw';
import { IErrorBlockProps } from './ErrorBlock.interfaces';
import { TEXTS } from './ErrorBlock.constants';

export class ErrorBlock extends Block<IErrorBlockProps> {
  protected getInternalChildren(): IChildren {
    const backLink = new Link({
      text: TEXTS.linkTitle,
      href: EPagesUrls.ChatsPage,
      classname: classes.link,
    });

    return {
      backLink,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
    });
  }
}
