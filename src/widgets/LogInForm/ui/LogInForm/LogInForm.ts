import { AuthorizationForm } from '@/widgets/AuthorizationForm';
import { Block, IChildren } from '@/shared/render';
import { userController } from '@/entities/User';
import { TEXTS } from './LogInForm.constants';
import { getButtons, getInputs } from '../../model';
import tmpl from './LogInForm.hbs?raw';
import { ILogInFormData } from './LogInForm.interfaces';

export class LogInForm extends Block {
  getInternalChildren(): IChildren {
    const inputs = getInputs();

    const buttons = getButtons();

    const authorizationForm = new AuthorizationForm<ILogInFormData>({
      title: TEXTS.title,
      buttons,
      inputs,
      onSubmit: (logInData): void => {
        userController.logIn(logInData);
      },
    });

    return {
      logInForm: authorizationForm,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
