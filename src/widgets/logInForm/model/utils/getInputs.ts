import { authInput } from '@/shared/ui';
import { INPUTS } from '../constants';

export const getInputs = (): THtml[] => {
  const { login, password } = INPUTS;

  const loginInput = authInput({
    placeholder: login.title,
    label: login.title,
    name: login.name,
    error: 'Some error',
  });

  const passwordInput = authInput({
    placeholder: password.title,
    label: password.title,
    name: password.name,
    type: 'password',
  });

  return [loginInput, passwordInput];
};
