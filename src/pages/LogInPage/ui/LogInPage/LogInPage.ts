import { CenterContentLayout } from '@/layouts/CenterContentLayout';

import { Block, IChildren } from '@/shared/render';
import { LogInForm } from '@/widgets/LogInForm';
import { Loader } from '@/shared/ui';
import { connect } from '@/shared/HOC';
import tmpl from './LogInPage.hbs?raw';

class LogInPageClass extends Block {
  getInternalChildren(): IChildren {
    const loginForm = new LogInForm({});

    return {
      page: new CenterContentLayout({
        children: {
          content: loginForm,
        },
      }),
      loader: new Loader({}),
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}

export const LogInPage = connect(LogInPageClass, (state) => ({
  isLoading: state.isLoading,
}));
