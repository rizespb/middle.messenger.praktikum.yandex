import { authInput } from '@/shared/ui';
import { INPUTS } from '../constants';

export const getInputs = (): THtml[] => {
  const { email, login, firtsName, secondName, phoneNumber, password, passwordRepeat } = INPUTS;

  const emailInput = authInput({
    placeholder: email.title,
    label: email.title,
    name: email.name,
  });

  const loginInput = authInput({
    placeholder: login.title,
    label: login.title,
    name: login.name,
    error: 'Some error',
  });

  const firtsNameInput = authInput({
    placeholder: firtsName.title,
    label: firtsName.title,
    name: firtsName.name,
  });

  const secondNameInput = authInput({
    placeholder: secondName.title,
    label: secondName.title,
    name: secondName.name,
  });

  const phoneNumberInput = authInput({
    placeholder: phoneNumber.title,
    label: phoneNumber.title,
    name: phoneNumber.name,
  });

  const passwordInput = authInput({
    placeholder: password.title,
    label: password.title,
    name: password.name,
    type: 'password',
  });

  const passwordRepeatInput = authInput({
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
