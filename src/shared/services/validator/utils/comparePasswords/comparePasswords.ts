import { EInputNames, IError } from '@/shared/types';
import { ERRORS } from './comparePasswords.constants';

export const comparePasswords = (entries: [string, string][]): IError => {
  const newPassword = entries.find(([name]) => name === EInputNames.NewPassword)?.[1];
  const passwordRepeat = entries.find(([name]) => name === EInputNames.PasswordRepeat)?.[1];

  if (passwordRepeat === undefined) {
    return { isError: false };
  }

  return newPassword === passwordRepeat
    ? { isError: false }
    : { isError: true, errorMessage: ERRORS.passwordRepeat };
};
