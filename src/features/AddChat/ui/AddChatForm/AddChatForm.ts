import { Block, IChildren, TEvents } from '@/shared/render';
import { BaseInput, Button, FileInput } from '@/shared/ui';
import { EInputNames } from '@/shared/types';
import { covertFormEntries, getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import { chatController } from '@/entities/Chat';
import classes from './AddChatForm.module.scss';
import tmpl from './AddChatForm.hbs?raw';
import { TEXTS, UPLOAD_INPUT_NAME, ACCEPTED_FILES } from './AddChatForm.constants';
import { IAddChatFormProps } from './AddChatForm.interfaces';

export class AddChatForm extends Block<IAddChatFormProps> {
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
          appStore.set('isAddChatFormVisible', false);
        },
      },
    });

    const fileInput = new FileInput({
      acceptedFiles: ACCEPTED_FILES,
      name: UPLOAD_INPUT_NAME,
    });

    const titleInput = new BaseInput({
      placeholder: TEXTS.titleInputPlacholder,
      name: EInputNames.Message,
    });

    return {
      submitButton,
      cancelButton,
      fileInput,
      titleInput,
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
          this.setProps({ isFileUploadError: true });
          return;
        }

        const entries = getFormDataEntries(event);

        const validationResults = validateForm(entries.slice(1));

        const { isError, errorMessage } = validationResults[0];

        const isValidationPassed = !isError;

        const { titleInput } = this.children;

        if (isError && !Array.isArray(titleInput)) {
          titleInput.setProps({
            error: errorMessage,
          });
        }

        if (isValidationPassed) {
          const { message } = covertFormEntries(entries);

          const formData = new FormData();
          formData.append('avatar', file);

          chatController.createChat(message, formData);
        }
      },
    };
  }

  protected render(): DocumentFragment {
    const { isFileUploadError = false } = this.props;

    return this.compile(tmpl, {
      classes,
      error: isFileUploadError ? TEXTS.fileUploadError : undefined,
    });
  }
}
