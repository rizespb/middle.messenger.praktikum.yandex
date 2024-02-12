import { baseInput } from '@/shared/ui';
import { INPUTS } from '../constants';

export const getInputs = (): THtml[] => {
  const { login, password } = INPUTS;

  const loginInput = baseInput({
    placeholder: login.title,
    label: login.title,
    name: login.name,
    error: 'Some error',
  });

  const passwordInput = baseInput({
    placeholder: password.title,
    label: password.title,
    name: password.name,
    type: 'password',
  });

  return [loginInput, passwordInput];
};
