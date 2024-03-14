import { Block, IChildren } from '@/shared/render';
import { ModalWindow } from '@/shared/ui';
import { connect } from '@/shared/HOC';
import { UpdatePhotoForm } from '../UpdatePhotoForm';
import { MODAL_CONTENT_ID, TEXTS } from './UpdatePhoto.constants';
import tmpl from './UpdatePhoto.hbs?raw';
import { IUpdatePhotoProps } from './UpdatePhoto.interfaces';

export class UpdatePhotoClass extends Block<IUpdatePhotoProps> {
  protected getInternalChildren(): IChildren {
    const modalContent = new UpdatePhotoForm({ isError: false });

    const closeModal = (): void => {
      appStore.set('isUpdateAvatarFormVisible', false);
    };

    const modalWindow = new ModalWindow({
      title: TEXTS.title.uploadPlease,
      titleColor: 'primary',
      children: {
        content: modalContent,
      },
      isModalOpened: this.props.isUpdateAvatarFormVisible || false,
      contentContainerId: MODAL_CONTENT_ID,
      onClose: closeModal,
    });

    return {
      modalWindow,
    };
  }

  protected render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl);
  }
}

export const UpdatePhoto = connect(UpdatePhotoClass, (state) => ({
  isUpdateAvatarFormVisible: state.isUpdateAvatarFormVisible,
}));
