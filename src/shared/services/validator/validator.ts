import { EInputNames } from '@/shared/types';
import { IError } from './validator.interfaces';
import { inputValidationMap, validation } from './validator.constants';

export class Validator {
  test = (value: string, inputName: EInputNames): IError => {
    switch (inputName) {
      case EInputNames.Email:
      case EInputNames.FirstName:
      case EInputNames.SecondName:
      case EInputNames.DisplayName:
      case EInputNames.Login:
      case EInputNames.Password:
      case EInputNames.NewPassword:
      case EInputNames.PasswordRepeat:
      case EInputNames.Phone:
        return this.baseValidation(value, inputName);

      case EInputNames.Message:
      case EInputNames.Search:
        return this.text(value, inputName);

      default:
        return {
          isError: true,
          errorMessage: validation.unknownError.errorMessage,
        };
    }
  };

  baseValidation = (value: string, inputName: EInputNames): IError => {
    const validationType = inputValidationMap[inputName];

    const { errorMessage, regExp } = validation[validationType];

    const result = regExp?.test(value);

    if (!result) {
      return {
        isError: true,
        errorMessage,
      };
    }

    return {
      isError: false,
    };
  };

  text = (value: string, inputName: EInputNames): IError => {
    if (!value) {
      const validationType = inputValidationMap[inputName];
      const { errorMessage } = validation[validationType];

      return {
        isError: true,
        errorMessage,
      };
    }

    return {
      isError: false,
    };
  };
}

export const validator = new Validator();
