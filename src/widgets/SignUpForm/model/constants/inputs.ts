import { EInputNames } from '@/shared/types';

export const INPUTS = {
  email: {
    name: EInputNames.Email,
    title: 'Почта',
  },
  login: {
    name: EInputNames.Login,
    title: 'Логин',
  },
  firtsName: {
    name: EInputNames.FirstName,
    title: 'Имя',
  },
  secondName: {
    name: EInputNames.SecondName,
    title: 'Фамилия',
  },
  phoneNumber: {
    name: EInputNames.Phone,
    title: 'Телефон',
  },
  password: {
    name: EInputNames.NewPassword,
    title: 'Пароль',
  },
  passwordRepeat: {
    name: EInputNames.PasswordRepeat,
    title: 'Пароль (ещё раз)',
  },
};
