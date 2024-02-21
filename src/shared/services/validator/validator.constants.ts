import { EInputNames } from '@/shared/types';

export const validation = {
  name: {
    errorMessage:
      'Поле может включать символы латиницы, кириллицы или дефис, первая буква должна быть заглавной',
    regExp: /^[A-ZА-Я]{1}[A-Za-zА-Яа-я-]{0,30}$/,
  },
  email: {
    errorMessage:
      'Поле может включать символы латиницы, цифры, дефис, нижнее подчеркивание. Поле обязательно должно содержать символ @ и точку',
    regExp: /^[\w-_]+@[\w-_]+\.[A-Za-z]{2,}$/,
  },
  login: {
    errorMessage:
      'Длина логина должна быть от 3 до 20 символов. Логин может содержать цифры, но не состоять из них. Допустимы дефис и нижнее подчёркивание',
    regExp: /^(?![\d-_]{3,20}$)[\w-_]{3,20}$/,
  },
  password: {
    errorMessage:
      'Длина пароля должна быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
    regExp: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
  },
  phone: {
    errorMessage:
      'Телефон должен содержать от 10 до 15 символов. Состоит из цифр, может начинается с плюса.',
    regExp: /^\+?\d{10,15}$/,
  },
  message: {
    errorMessage: 'Поле не должно быть пустым',
    regExp: null,
  },
  unknownError: {
    errorMessage: 'Поле не должно быть пустым',
    regExp: null,
  },
};

export const inputValidationMap: Record<EInputNames, keyof typeof validation> = {
  [EInputNames.DisplayName]: 'name',
  [EInputNames.FirstName]: 'name',
  [EInputNames.SecondName]: 'name',
  [EInputNames.Email]: 'email',
  [EInputNames.Login]: 'login',
  [EInputNames.Password]: 'password',
  [EInputNames.PasswordRepeat]: 'password',
  [EInputNames.NewPassword]: 'password',
  [EInputNames.Phone]: 'phone',
  [EInputNames.Message]: 'message',
};
