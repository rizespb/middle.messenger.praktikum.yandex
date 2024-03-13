import { Block, IChildren, TEvents } from '@/shared/render';
import { Button, FileInput } from '@/shared/ui';
import { userController } from '@/entities/User';
import classes from './UpdatePhotoForm.module.scss';
import tmpl from './UpdatePhotoForm.hbs?raw';
import { TEXTS, UPLOAD_INPUT_NAME, ACCEPT_FILES } from './UpdatePhotoForm.constants';
import { IUpdatePhotoFormProps } from './UpdatePhotoForm.interfaces';

export class UpdatePhotoForm extends Block<IUpdatePhotoFormProps> {
  protected getInternalChildren(): IChildren {
    const submitButton = new Button({
      kind: 'primary',
      title: TEXTS.submitButton,
      type: 'submit',
    });

    const cancelButton = new Button({
      kind: 'primary',
      title: TEXTS.cancelButton,
      type: 'button',
      events: {
        click: (): void => {
          appStore.set('isUpdateAvatarFormVisible', false);
        },
      },
    });

    const input = new FileInput({
      acceptedFiles: ACCEPT_FILES,
      name: UPLOAD_INPUT_NAME,
    });

    return {
      submitButton,
      cancelButton,
      input,
    };
  }

  protected getInternalEvents(): TEvents {
    return {
      submit: (event): void => {
        event.preventDefault();

        const fileInput = document.getElementById(UPLOAD_INPUT_NAME) as HTMLInputElement;

        if (!fileInput || !fileInput.files) {
          return;
        }

        const file = fileInput.files[0];

        if (!file) {
          this.setProps({ isError: true });
          return;
        }

        const formData = new FormData();
        formData.append('avatar', file);

        userController.updateAvatar(formData);
      },
    };
  }

  protected render(): DocumentFragment {
    const { isError = false } = this.props;

    return this.compile(tmpl, {
      classes,
      ACCEPT_FILES,
      name: UPLOAD_INPUT_NAME,
      error: isError ? TEXTS.error : undefined,
    });
  }
}
