import { CenterContentLayout } from '@/layouts/CenterContentLayout/ui';
import { Block, IChildren } from '@/shared/render';
import { SignUpForm } from '@/widgets/SignUpForm';
import { connect } from '@/shared/HOC';
import { Loader, SnackBar } from '@/shared/ui';
import tmpl from './SignUpPage.hbs?raw';

class SignUpPageClass extends Block {
  getInternalChildren(): IChildren {
    const signUpForm = new SignUpForm({});

    return {
      page: new CenterContentLayout({
        children: {
          content: signUpForm,
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

export const SignUpPage = connect(SignUpPageClass, (state) => ({
  isLoading: state.isLoading,
}));
