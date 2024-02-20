import { CenterContentLayout } from '@/layouts/CenterContentLayout';
import { Block, IChildren } from '@/shared/render';
import { ErrorBlock } from '@/widgets/ErrorBlock';
import { TEXTS } from './Error500Page.constants';
import tmpl from './Error500Page.hbs?raw';

export class Error500Page extends Block {
  getInternalChildren(): IChildren<Block> {
    const errorBlock = new ErrorBlock({
      title: TEXTS.title,
      description: TEXTS.description,
    });

    return {
      page: new CenterContentLayout({
        content: errorBlock,
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
