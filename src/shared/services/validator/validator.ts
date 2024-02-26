import { EInputNames, IError } from '@/shared/types';
import { inputValidationMap, validation } from './validator.constants';

export class Validator {
  test = (inputName: EInputNames, value: string): IError => {
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

  private baseValidation = (value: string, inputName: EInputNames): IError => {
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

  private text = (value: string, inputName: EInputNames): IError => {
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
