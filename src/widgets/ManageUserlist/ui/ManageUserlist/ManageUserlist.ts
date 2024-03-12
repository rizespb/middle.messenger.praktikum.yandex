import { classNames } from '@/shared/utils';
import { Icon, ModalWindow, Popup, ActionsList } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Block, IChildren } from '@/shared/render';
import tmpl from './ManageUserlist.hbs?raw';
import classes from './ManageUserlist.module.scss';
import { SHOW_MORE_ICON_ID, TEXTS, actionsData } from './ManageUserlist.constants';
import { Form } from '../Form';

const isModalOpened = false;

export class ManageUserlist extends Block {
  protected getInternalChildren(): IChildren {
    const actions = new ActionsList({ actionsData });

    const popup = new Popup({
      children: {
        content: actions,
      },
      direction: 'bottomRight',
      isPopupOpened: false,
    });

    const modalContent = new Form({
      buttonTitle: TEXTS.addUserModal.button,
    });

    const modalWindow = new ModalWindow({
      children: {
        content: modalContent,
      },
      title: TEXTS.addUserModal.title,
      isModalOpened,
    });

    const showMoreIcon = new Icon({
      icon: EIcons.ShowMore,
      iconClass: classNames({
        [classes.showMoreIcon]: true,
        [classes.showMoreIcon__active]: popup.props.isPopupOpened,
      }),
      containerClass: classNames({
        [classes.showMoreIconContainer]: true,
        [classes.showMoreIconContainer__active]: popup.props.isPopupOpened,
      }),
      id: SHOW_MORE_ICON_ID,
      events: {
        click: (event): void => {
          event.stopPropagation();
          popup.setProps({ isPopupOpened: !popup.props.isPopupOpened });
        },
      },
    });

    return {
      showMoreIcon,
      popup,
      modalWindow,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
