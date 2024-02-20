import { compile } from '@/shared/utils';
import { interactiveInput } from '@/shared/ui/interactiveInput';
import { button } from '@/shared/ui';
import { updatePhoto } from '@/features/updatePhoto';
import { Block } from '@/shared/render';
import { PROFILE_DATA_INPUTS, CHANGE_PASSWORD_INPUTS } from '../../model';
import { TEXTS } from './Profile.constants';
import tmpl from './Profile.hbs?raw';
import classes from './Profile.module.scss';
import { actions } from '../Actions';
import { userAvatar } from '../UserAvatar';

export const profile = (): THtml => {
  // @TODO временные флаги
  const isEditMode = false;
  const isChangePasswordMode = false;
  const isUpdateFormVisible = false;

  const avatar = userAvatar({});

  const inputs = isChangePasswordMode ? CHANGE_PASSWORD_INPUTS : PROFILE_DATA_INPUTS;

  const inputsStr = inputs.map((input) => {
    const { name, title, type } = input;

    return interactiveInput({
      label: title,
      name,
      placeholder: title,
      isDisabled: !isEditMode,
      type,
    });
  });

  const submitButton = button({
    title: TEXTS.submitButton,
    type: 'submit',
    className: classes.submitButtom,
    kind: 'primary',
  });

  const actionsStr = actions();

  const updatePhotoStr = updatePhoto();

  return compile(tmpl)({
    classes,
    isEditMode,
    inputs: inputsStr,
    submitButton,
    actions: actionsStr,
    userAvatar: avatar,
    firstName: 'Иван',
    updatePhoto: isUpdateFormVisible ? updatePhotoStr : undefined,
  });
};

export class Profile extends Block {
  render(): DocumentFragment {
    return this.compile('<div>Profile</div>', { classes });
  }
}
