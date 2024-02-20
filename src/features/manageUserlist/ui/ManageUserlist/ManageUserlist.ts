import { classNames } from '@/shared/utils';
import { Icon, ModalWindow, Popup } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { ManageUserlistForm } from '@/widgets/ManageUserlistForm';
import { Block, IChildren } from '@/shared/render';
import tmpl from './ManageUserlist.hbs?raw';
import classes from './ManageUserlist.module.scss';
import { ActionsList } from '../ActionsList';
import { SHOW_MORE_ICON_ID, TEXTS } from './ManageUserlist.constants';

export class ManageUserlist extends Block {
  protected getInternalChildren(): IChildren<Block> {
    const isPopupOpened = false;
    const isModalOpened = false;

    const showMoreIcon = new Icon({
      icon: EIcons.ShowMore,
      iconClass: classNames({
        [classes.showMoreIcon]: true,
        [classes.showMoreIcon__active]: isPopupOpened,
      }),
      containerClass: classNames({
        [classes.showMoreIconContainer]: true,
        [classes.showMoreIconContainer__active]: isPopupOpened,
      }),
      id: SHOW_MORE_ICON_ID,
    });

    const actions = new ActionsList({});

    const popup = new Popup({
      content: actions,
      direction: 'bottomRight',
      isPopupOpened,
    });

    const modalContent = new ManageUserlistForm({
      buttonTitle: TEXTS.addUser.button,
    });

    const modalWindow = new ModalWindow({
      content: modalContent,
      title: TEXTS.addUser.title,
      isModalOpened,
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
