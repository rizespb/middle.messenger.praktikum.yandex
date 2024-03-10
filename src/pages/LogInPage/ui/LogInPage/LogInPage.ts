import { CenterContentLayout } from '@/layouts/CenterContentLayout';

import { Block, IChildren } from '@/shared/render';
import { LogInForm } from '@/widgets/LogInForm';
import { Loader, SnackBar } from '@/shared/ui';
import { connect } from '@/shared/HOC';
import tmpl from './LogInPage.hbs?raw';
import { ILogInPageProps } from './LogInPage.interfaces';

class LogInPageClass extends Block<ILogInPageProps> {
  getInternalChildren(): IChildren {
    const loginForm = new LogInForm({});

    return {
      page: new CenterContentLayout({
        children: {
          content: loginForm,
        },
      }),
      loader: new Loader({}),
      snackBar: new SnackBar({}),
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}

export const LogInPage = connect(LogInPageClass, (state) => ({
  isLoading: state.isLoading,
}));
