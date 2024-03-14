import { Icon, ModalWindow } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Block, IChildren } from '@/shared/render';
import { connect } from '@/shared/HOC';
import tmpl from './DeleteChat.hbs?raw';
import classes from './DeleteChat.module.scss';
import { IDeleteChatProps } from './DeleteChat.interfaces';
import { MODAL_CONTENT_ID, TEXTS } from './DeleteChat.constants';
import { DeleteChatForm } from '../DeleteChatForm';

export class DeleteChatClass extends Block<IDeleteChatProps> {
  protected getInternalChildren(): IChildren {
    const icon = new Icon({
      icon: EIcons.PlusIcon,
      iconClass: classes.icon,
      containerClass: classes.iconContainer,
      events: {
        click: (): void => {
          appStore.set('isDeleteChatFormVisible', true);
        },
      },
    });

    const closeModal = (): void => {
      appStore.set('isDeleteChatFormVisible', false);
    };

    const form = new DeleteChatForm({});

    const modalWindow = new ModalWindow({
      children: {
        content: form,
      },
      title: TEXTS.modalTilte,
      isModalOpened: Boolean(this.props.isDeleteChatFormVisible),
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

export const DeleteChat = connect(DeleteChatClass, (state) => ({
  isDeleteChatFormVisible: state.isDeleteChatFormVisible,
}));
