import { AuthorizationForm } from '@/widgets/AuthorizationForm';
import { Block, IChildren } from '@/shared/render';
import { userController } from '@/entities/User';
import { IUserData } from '@/entities/User/api';
import { TEXTS } from './SignUpForm.constants';
import tmpl from './SignUpForm.hbs?raw';

import { getButtons, getInputs } from '../../model';
import { ISignUpFormData } from './SignUpForm.interfaces';

export class SignUpForm extends Block {
  getInternalChildren(): IChildren {
    const inputs = getInputs();

    const buttons = getButtons();

    const authorizationForm = new AuthorizationForm<ISignUpFormData>({
      title: TEXTS.title,
      buttons,
      inputs,
      onSubmit: (userData): void => {
        const { first_name, second_name, login, email, phone, newPassword } = userData;

        const createUserData: IUserData = {
          first_name,
          second_name,
          login,
          email,
          password: newPassword,
          phone,
        };

        userController.createUser(createUserData);
      },
    });

    return {
      signUpForm: authorizationForm,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
