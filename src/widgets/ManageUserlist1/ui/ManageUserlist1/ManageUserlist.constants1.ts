import { EIcons } from '@/shared/types';
import { classNames } from '@/shared/utils';
import { IActionData } from '@/shared/ui';
import classes from './ManageUserlist.module.scss';

export const SHOW_MORE_ICON_ID = 'ManageUserlist-show-more-icon';

export const TEXTS = {
  addUserModal: {
    title: 'Добавить пользователя',
    button: 'Добавить',
  },
  deleteUserModal: {
    title: 'Удалить пользователя',
    button: 'Удалить',
  },
};

export const actionsData: IActionData[] = [
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
