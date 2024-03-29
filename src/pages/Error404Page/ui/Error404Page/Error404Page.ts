import { CenterContentLayout } from '@/layouts/CenterContentLayout';
import { Block, IChildren } from '@/shared/render';
import { ErrorBlock } from '@/widgets/ErrorBlock';
import { TEXTS } from './Error404Page.constants';
import tmpl from './Error404Page.hbs?raw';

export class Error404Page extends Block {
  getInternalChildren(): IChildren {
    const errorBlock = new ErrorBlock({
      title: TEXTS.title,
      description: TEXTS.description,
    });

    return {
      page: new CenterContentLayout({
        children: {
          content: errorBlock,
        },
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
