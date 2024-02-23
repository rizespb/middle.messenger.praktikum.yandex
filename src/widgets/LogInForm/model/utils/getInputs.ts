import { BaseInput } from '@/shared/ui';
import { Block } from '@/shared/render';
import { INPUTS } from '../constants';

export const getInputs = (): Block[] => {
  const { login, password } = INPUTS;

  const loginInput = new BaseInput({
    placeholder: login.title,
    label: login.title,
    name: login.name,
  });

  const passwordInput = new BaseInput({
    placeholder: password.title,
    label: password.title,
    name: password.name,
    type: 'password',
  });

  return [loginInput, passwordInput];
};
