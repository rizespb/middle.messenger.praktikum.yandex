import { Block, IChildren } from '@/shared/render';
import { userController } from '@/entities/User';
import { InteractiveInput } from '@/shared/ui';
import { EInputNames } from '@/shared/types';
import tmpl from './UpdatePasswordForm.hbs?raw';
import {
  IUpdatePasswordsFormData,
  IPersonalDetailsFormProps,
} from './UpdatePasswordForm.interfaces';
import { Form } from '../Form';
import { TEXTS } from './UpdatePasswordForm.constants';

export class UpdatePasswordForm extends Block<IPersonalDetailsFormProps> {
  getInternalChildren(): IChildren {
    const oldPasswordInput = new InteractiveInput({
      label: TEXTS.oldPassword,
      placeholder: TEXTS.oldPassword,
      isDisabled: false,
      name: EInputNames.Password,
      type: 'password',
    });

    const newPasswordInput = new InteractiveInput({
      label: TEXTS.newPassword,
      placeholder: TEXTS.newPassword,
      isDisabled: false,
      name: EInputNames.NewPassword,
      type: 'password',
    });

    const repeatPasswordInput = new InteractiveInput({
      label: TEXTS.repeatPassword,
      placeholder: TEXTS.repeatPassword,
      isDisabled: false,
      name: EInputNames.PasswordRepeat,
      type: 'password',
    });

    const inputs = [oldPasswordInput, newPasswordInput, repeatPasswordInput];

    const form = new Form<IUpdatePasswordsFormData>({
      isButtonsVisible: true,
      children: {
        inputs,
      },
      onSubmit: (passwordsData): void => {
        userController.updatePassword({
          oldPassword: passwordsData.password,
          newPassword: passwordsData.newPassword,
        });
      },
    });

    return {
      updatePasswordForm: form,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl);
  }
}
