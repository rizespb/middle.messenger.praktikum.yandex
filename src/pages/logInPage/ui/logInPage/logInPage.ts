import { CenterContentLayout } from '@/layouts/CenterContentLayout';

import { Block, IChildren } from '@/shared/render';
import { LogInForm } from '@/widgets/LogInForm';
import tmpl from './LogInPage.hbs?raw';

export class LogInPage extends Block {
  getInternalChildren(): IChildren {
    const loginForm = new LogInForm({});

    return {
      page: new CenterContentLayout({
        content: loginForm,
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
