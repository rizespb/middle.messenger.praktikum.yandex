import { ModalWindow } from '@/shared/ui';
import { Block, IChildren } from '@/shared/render';
import { connect } from '@/shared/HOC';
import tmpl from './ManageUserlist.hbs?raw';
import classes from './ManageUserlist.module.scss';
import { MODAL_CONTENT_ID, TEXTS } from './ManageUserlist.constants';
import { Form } from '../Form';
import { IManageUserlistProps } from './ManageUserlist.interfaces';
import { ActionsPopup } from '../ActionsPopup';
import { ShowActionsIcon } from '../ShowActionsIcon';

export class ManageUserlistClass extends Block<IManageUserlistProps> {
  protected getInternalChildren(): IChildren {
    const openModal = (): void => {
      appStore.set('isManageUserlistFormVisible', true);
    };

    const closeModal = (): void => {
      appStore.set('isManageUserlistFormVisible', false);
    };

    const actionsPopup = new ActionsPopup({
      isPopupOpened: Boolean(this.props.isPopupOpened),
      onAddUserClick: (): void => {
        this.setProps({ isPopupOpened: false, formMode: 'addUser' });
        openModal();
      },
      onDeleteUserClick: (): void => {
        this.setProps({ isPopupOpened: false, formMode: 'deleteUser' });
        openModal();
      },
    });

    const showActionsIcon = new ShowActionsIcon({
      isPopupOpened: actionsPopup.props.isPopupOpened,
      onClick: (): void => {
        this.setProps({ isPopupOpened: !this.props.isPopupOpened });
      },
    });

    const children: IChildren = { showActionsIcon, actionsPopup };

    if (!this.props.formMode) {
      return children;
    }

    const form = new Form({
      mode: this.props.formMode,
      onCancel: (): void => {
        closeModal();
      },
    });

    const modalWindow = new ModalWindow({
      children: {
        content: form,
      },
      title:
        this.props.formMode === 'addUser' ? TEXTS.addUserModalTitle : TEXTS.deleteUserModalTitle,
      isModalOpened: Boolean(this.props.isManageUserlistFormVisible),
      contentContainerId: MODAL_CONTENT_ID,
      onClose: closeModal,
    });

    return {
      ...children,
      modalWindow,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, { classes });
  }
}

export const ManageUserlist = connect(ManageUserlistClass, (state) => ({
  isManageUserlistFormVisible: state.isManageUserlistFormVisible,
}));
