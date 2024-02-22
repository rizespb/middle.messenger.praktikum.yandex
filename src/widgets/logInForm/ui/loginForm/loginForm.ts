import { AuthorizationForm } from '@/widgets/AuthorizationForm';
import { Block, IChildren } from '@/shared/render';
import { TEXTS } from './LogInForm.constants';
import { getButtons, getInputs } from '../../model';
import tmpl from './LogInForm.hbs?raw';

export class LogInForm extends Block {
  getInternalChildren(): IChildren {
    const inputs = getInputs();

    const buttons = getButtons();

    const authorizationForm = new AuthorizationForm({
      title: TEXTS.title,
      buttons,
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
