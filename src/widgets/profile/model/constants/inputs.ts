import { EInputNames } from '@/shared/types';

export const profileInputsData = [
  {
    name: EInputNames.Email,
    title: 'Почта',
    type: 'text',
  },
  {
    name: EInputNames.Login,
    title: 'Логин',
    type: 'text',
  },
  {
    name: EInputNames.FirstName,
    title: 'Имя',
    type: 'text',
  },
  {
    name: EInputNames.SecondName,
    title: 'Фамилия',
    type: 'text',
  },
  {
    name: EInputNames.DisplayName,
    title: 'Имя в чате',
    type: 'text',
  },
  {
    name: EInputNames.Phone,
    title: 'Телефон',
    type: 'text',
  },
];

export const changePasswordInputsData = [
  {
    name: EInputNames.Password,
    title: 'Старый пароль',
    type: 'password',
  },
  {
    name: EInputNames.NewPassword,
    title: 'Новый пароль',
    type: 'password',
  },
  {
    name: 'passwordRepeat',
    type: EInputNames.PasswordRepeat,
    title: 'Повторите новый пароль',
  },
];
