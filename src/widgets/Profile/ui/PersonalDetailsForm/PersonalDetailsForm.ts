import { Block, IChildren } from '@/shared/render';
import { userController } from '@/entities/User';
import { InteractiveInput } from '@/shared/ui';
import { connect } from '@/shared/HOC';
import { EInputNames } from '@/shared/types';
import { TEXTS } from './PersonalDetailsForm.constants';
import tmpl from './PersonalDetailsForm.hbs?raw';
import {
  IPersonalDetailsFormData,
  IPersonalDetailsFormProps,
} from './PersonalDetailsForm.interfaces';
import { Form } from '../Form';

export class PersonalDetailsFormClass extends Block<IPersonalDetailsFormProps> {
  getInternalChildren(): IChildren {
    const { profileMode, user } = this.props;
    const { email, login, first_name, second_name, display_name, phone } = user || {};

    const isViewMode = profileMode === 'view';

    const emailInput = new InteractiveInput({
      label: TEXTS.email,
      placeholder: TEXTS.email,
      isDisabled: isViewMode,
      name: EInputNames.Email,
      type: 'text',
      value: email,
    });

    const loginInput = new InteractiveInput({
      label: TEXTS.login,
      placeholder: TEXTS.login,
      isDisabled: isViewMode,
      name: EInputNames.Login,
      type: 'text',
      value: login,
    });

    const firstNameInput = new InteractiveInput({
      label: TEXTS.firstName,
      placeholder: TEXTS.firstName,
      isDisabled: isViewMode,
      name: EInputNames.FirstName,
      type: 'text',
      value: first_name,
    });

    const secondNameInput = new InteractiveInput({
      label: TEXTS.secondName,
      placeholder: TEXTS.secondName,
      isDisabled: isViewMode,
      name: EInputNames.SecondName,
      type: 'text',
      value: second_name,
    });

    const displayNameInput = new InteractiveInput({
      label: TEXTS.displayName,
      placeholder: TEXTS.displayName,
      isDisabled: isViewMode,
      name: EInputNames.DisplayName,
      type: 'text',
      value: display_name,
    });

    const phoneInput = new InteractiveInput({
      label: TEXTS.phone,
      placeholder: TEXTS.phone,
      isDisabled: isViewMode,
      name: EInputNames.Phone,
      type: 'text',
      value: phone,
    });

    const inputs = [
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      displayNameInput,
      phoneInput,
    ];

    const form = new Form<IPersonalDetailsFormData>({
      isButtonsVisible: !isViewMode,
      children: {
        inputs,
      },
      onSubmit: (profileData): void => {
        userController.updateProfile(profileData);
      },
    });

    return {
      personalDetailsForm: form,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl);
  }
}

export const PersonalDetailsForm = connect(PersonalDetailsFormClass, (state) => ({
  profileMode: state.profileMode,
  user: state.user,
}));
