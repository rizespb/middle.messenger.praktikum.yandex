import { EIcons } from '@/shared/types';
import { classNames } from '@/shared/utils';
import classes from './ActionsList.module.scss';

export const actionsData = [
  {
    text: 'Добавить пользователя',
    icon: EIcons.PlusIcon,
    iconClass: classes.plusIcon,
    containerClass: classes.plusIconContainer,
  },
  {
    text: 'Удалить пользователя',
    icon: EIcons.PlusIcon,
    iconClass: classNames([classes.plusIcon, classes.plusIcon__rotated]),
    containerClass: classes.plusIconContainer,
  },
];
