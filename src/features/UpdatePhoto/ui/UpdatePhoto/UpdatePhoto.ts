import { Block, IChildren } from '@/shared/render';
import { ModalWindow } from '@/shared/ui';
import { UpdatePhotoForm } from '../UpdatePhotoForm';
import { TEXTS } from './UpdatePhoto.constants';
import tmpl from './UpdatePhoto.hbs?raw';

const isModalOpened = true;
const isError = true;

export class UpdatePhoto extends Block {
  protected getInternalChildren(): IChildren {
    const modalContent = new UpdatePhotoForm({});

    const modalWindow = new ModalWindow({
      title: TEXTS.title.uploadPlease,
      titleColor: isError ? 'error' : 'primary',
      children: {
        content: modalContent,
      },
      isModalOpened,
    });

    return {
      modalWindow,
    };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl);
  }
}