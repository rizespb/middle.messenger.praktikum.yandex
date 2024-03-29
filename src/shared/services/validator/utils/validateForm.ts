import { EInputNames, IError } from '@/shared/types';
import { validator } from '../validator';

export const validateForm = (entries: [string, string][]): IError[] => {
  const validationResults = entries.map<IError>((input) => {
    const [name, value] = input as [EInputNames, string];

    const result = validator.test(name, value);
    return result;
  });

  return validationResults;
};
