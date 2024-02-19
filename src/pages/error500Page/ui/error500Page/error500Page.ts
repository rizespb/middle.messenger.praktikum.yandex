import { CenterContentLayout } from '@/layouts/CenterContentLayout';
import { Block } from '@/shared/render';
import { ErrorBlock } from '@/widgets/errorBlock';
import { TEXTS } from './Error500Page.constants';
import tmpl from './Error500Page.hbs?raw';

export class Error500Page extends Block {
  setInternalChildren(): void {
    this.children.page = new CenterContentLayout({
      content: new ErrorBlock({
        title: TEXTS.title,
        description: TEXTS.description,
      }),
    });
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
