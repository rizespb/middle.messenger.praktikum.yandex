import { classNames } from '@/shared/utils';
import { Popup, ActionsList, IActionData } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Block, IChildren } from '@/shared/render';
import tmpl from './ActionsPopup.hbs?raw';
import classes from './ActionsPopup.module.scss';
import { TEXTS } from './ActionsPopup.constants';
import { IActionsPopupProps } from './ActionsPopup.interfaces';

export class ActionsPopup extends Block<IActionsPopupProps> {
  protected getInternalChildren(): IChildren {
    const addUserAction: IActionData = {
      text: TEXTS.addUser,
      icon: EIcons.PlusIcon,
      iconClass: classes.plusIcon,
      containerClass: classes.plusIconContainer,
      onClick: this.props.onAddUserClick,
    };
    const deleteUserAction: IActionData = {
      text: TEXTS.deleteUser,
      icon: EIcons.PlusIcon,
      iconClass: classNames([classes.plusIcon, classes.plusIcon__rotated]),
      containerClass: classes.plusIconContainer,
      onClick: this.props.onDeleteUserClick,
    };

    const actions = new ActionsList({
      actionsData: [addUserAction, deleteUserAction],
    });

    const popup = new Popup({
      children: {
        content: actions,
      },
      direction: 'bottomRight',
      isPopupOpened: this.props.isPopupOpened,
    });

    return {
      popup,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, { classes });
  }
}
