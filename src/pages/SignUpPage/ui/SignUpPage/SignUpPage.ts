import { CenterContentLayout } from '@/layouts/CenterContentLayout/ui';
import { Block, IChildren } from '@/shared/render';
import { SignUpForm } from '@/widgets/SignUpForm';
import tmpl from './SignUpPage.hbs?raw';

export class SignUpPage extends Block {
  getInternalChildren(): IChildren {
    const signUpForm = new SignUpForm({});

    return {
      page: new CenterContentLayout({
        children: {
          content: signUpForm,
        },
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}