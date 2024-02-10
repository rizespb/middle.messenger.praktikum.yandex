import { classNames, compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import classes from './showActionsButton.module.scss';
import tmpl from './showActionsButton.hbs?raw';
import { TEXTS } from './showActionsButton.constants';

export const showActionsButton = (): THtml => {
  const isPopupOpened = true;

  const showMoreIcon = icon({
    icon: EIcons.ShowMore,
    iconClass: classNames({
      [classes.showMoreIcon]: true,
      [classes.showMoreIcon__active]: isPopupOpened,
    }),
    containerClass: classNames({
      [classes.showMoreIconContainer]: true,
      [classes.showMoreIconContainer__active]: isPopupOpened,
    }),
  });

  const addUserIcon = icon({
    icon: EIcons.PlusIcon,
    iconClass: classes.plusIcon,
    containerClass: classes.plusIconContainer,
  });

  const deleteUserIcon = icon({
    icon: EIcons.PlusIcon,
    iconClass: classNames([classes.plusIcon, classes.plusIcon__rotated]),
    containerClass: classes.plusIconContainer,
  });

  return compile(tmpl)({
    addUser: {
      text: TEXTS.addUser,
      icon: addUserIcon,
    },
    deleteUser: {
      text: TEXTS.deleteUser,
      icon: deleteUserIcon,
    },
    deleteUserText: TEXTS.deleteUser,
    showMoreIcon,
    isPopupOpened,
    classes,
  });
};
