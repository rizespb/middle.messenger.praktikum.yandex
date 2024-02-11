import { IButtonProps } from '@/shared/ui';
import classes from './actions.module.scss';

export const ACTIONS: IButtonProps[] = [
  {
    title: 'Изменить данные',
    type: 'button',
    kind: 'secondary',
    className: classes.button,
  },
  {
    title: 'Изменить пароль',
    type: 'button',
    kind: 'secondary',
    className: classes.button,
  },
  {
    title: 'Выйти',
    type: 'button',
    kind: 'tertiary',
    className: classes.button,
  },
];
