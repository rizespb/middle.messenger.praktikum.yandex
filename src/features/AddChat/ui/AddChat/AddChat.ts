import { Icon, ModalWindow } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Block, IChildren } from '@/shared/render';
import { connect } from '@/shared/HOC';
import tmpl from './AddChat.hbs?raw';
import classes from './AddChat.module.scss';
import { IAddChatProps } from './AddChat.interfaces';
import { MODAL_CONTENT_ID, TEXTS } from './AddChat.constants';
import { AddChatForm } from '../AddChatForm';

export class AddChatClass extends Block<IAddChatProps> {
  protected getInternalChildren(): IChildren {
    const icon = new Icon({
      icon: EIcons.PlusIcon,
      iconClass: classes.icon,
      containerClass: classes.iconContainer,
      events: {
        click: (): void => {
          appStore.set('isAddChatFormVisible', true);
        },
      },
    });

    const closeModal = (): void => {
      appStore.set('isAddChatFormVisible', false);
    };

    const form = new AddChatForm({});

    const modalWindow = new ModalWindow({
      children: {
        content: form,
      },
      title: TEXTS.modalTilte,
      isModalOpened: Boolean(this.props.isAddChatFormVisible),
      contentContainerId: MODAL_CONTENT_ID,
      onClose: closeModal,
    });

    return {
      icon,
      modalWindow,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, { classes });
  }
}

export const AddChat = connect(AddChatClass, (state) => ({
  isAddChatFormVisible: state.isAddChatFormVisible,
}));
