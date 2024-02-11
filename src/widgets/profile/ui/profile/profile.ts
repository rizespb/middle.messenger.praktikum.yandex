import { compile } from '@/shared/utils';
import { interactiveInput } from '@/shared/ui/interactiveInput';
import { button } from '@/shared/ui';
import { PROFILE_DATA_INPUTS, CHANGE_PASSWORD_INPUTS } from '../../model';
import { TEXTS } from './profile.constants';
import tmpl from './profile.hbs?raw';
import classes from './profile.module.scss';
import { actions } from '../actions';
import { userAvatar } from '../userAvatar';

export const profile = (): THtml => {
  // @TODO временные флаги
  const isEditMode = true;
  const isChangePasswordMode = false;

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

  return compile(tmpl)({
    classes,
    isEditMode,
    inputs: inputsStr,
    submitButton,
    actions: actionsStr,
    userAvatar: avatar,
    firstName: 'Иван',
  });
};
