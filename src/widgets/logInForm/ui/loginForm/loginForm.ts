import { AuthorizationForm } from '@/shared/ui';
import { Block, IChildren } from '@/shared/render';
import { TEXTS } from './LogInForm.constants';
import { getButtons, getInputs } from '../../model';
import tmpl from './LogInForm.hbs?raw';

export class LogInForm extends Block {
  getInternalChildren(): IChildren {
    const inputs = getInputs();

    const buttons = getButtons();

    const authorizationForm = new AuthorizationForm({
      buttons,
      title: TEXTS.title,
      inputs,
    });

    return {
      logInForm: authorizationForm,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
