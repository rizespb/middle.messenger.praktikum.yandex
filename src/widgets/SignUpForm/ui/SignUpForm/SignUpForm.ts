import { AuthorizationForm } from '@/widgets/AuthorizationForm';
import { Block, IChildren } from '@/shared/render';
import { TEXTS } from './SignUpForm.constants';
import tmpl from './SignUpForm.hbs?raw';

import { getButtons, getInputs } from '../../model';

export class SignUpForm extends Block {
  getInternalChildren(): IChildren {
    const inputs = getInputs();

    const buttons = getButtons();

    const authorizationForm = new AuthorizationForm({
      title: TEXTS.title,
      buttons,
      inputs,
    });

    return {
      signUpForm: authorizationForm,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
