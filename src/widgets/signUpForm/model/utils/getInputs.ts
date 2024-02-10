import { baseInput } from '@/shared/ui';
import { INPUTS } from '../constants';

export const getInputs = (): THtml[] => {
  const { email, login, firtsName, secondName, phoneNumber, password, passwordRepeat } = INPUTS;

  const emailInput = baseInput({
    placeholder: email.title,
    label: email.title,
    name: email.name,
  });

  const loginInput = baseInput({
    placeholder: login.title,
    label: login.title,
    name: login.name,
    error: 'Some error',
  });

  const firtsNameInput = baseInput({
    placeholder: firtsName.title,
    label: firtsName.title,
    name: firtsName.name,
  });

  const secondNameInput = baseInput({
    placeholder: secondName.title,
    label: secondName.title,
    name: secondName.name,
  });

  const phoneNumberInput = baseInput({
    placeholder: phoneNumber.title,
    label: phoneNumber.title,
    name: phoneNumber.name,
  });

  const passwordInput = baseInput({
    placeholder: password.title,
    label: password.title,
    name: password.name,
    type: 'password',
  });

  const passwordRepeatInput = baseInput({
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
