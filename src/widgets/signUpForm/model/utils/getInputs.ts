import { BaseInput } from '@/shared/ui';
import { Block } from '@/shared/render';
import { INPUTS } from '../constants';

export const getInputs = (): Block[] => {
  const { email, login, firtsName, secondName, phoneNumber, password, passwordRepeat } = INPUTS;

  const emailInput = new BaseInput({
    placeholder: email.title,
    label: email.title,
    name: email.name,
  });

  const loginInput = new BaseInput({
    placeholder: login.title,
    label: login.title,
    name: login.name,
  });

  const firtsNameInput = new BaseInput({
    placeholder: firtsName.title,
    label: firtsName.title,
    name: firtsName.name,
  });

  const secondNameInput = new BaseInput({
    placeholder: secondName.title,
    label: secondName.title,
    name: secondName.name,
  });

  const phoneNumberInput = new BaseInput({
    placeholder: phoneNumber.title,
    label: phoneNumber.title,
    name: phoneNumber.name,
  });

  const passwordInput = new BaseInput({
    placeholder: password.title,
    label: password.title,
    name: password.name,
    type: 'password',
  });

  const passwordRepeatInput = new BaseInput({
    placeholder: passwordRepeat.title,
    label: passwordRepeat.title,
    name: passwordRepeat.name,
    type: 'password',
  });

  return [
    emailInput,
    loginInput,
    firtsNameInput,
    secondNameInput,
    phoneNumberInput,
    passwordInput,
    passwordRepeatInput,
  ];
};
