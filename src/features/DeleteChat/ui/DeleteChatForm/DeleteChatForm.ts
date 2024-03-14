import { Block, IChildren, TEvents } from '@/shared/render';
import { BaseInput, Button } from '@/shared/ui';
import { EInputNames } from '@/shared/types';
import { covertFormEntries, getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import { chatController } from '@/entities/Chat';
import classes from './DeleteChatForm.module.scss';
import tmpl from './DeleteChatForm.hbs?raw';
import { TEXTS } from './DeleteChatForm.constants';

export class DeleteChatForm extends Block {
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

    const titleInput = new BaseInput({
      placeholder: TEXTS.titleInputPlacholder,
      name: EInputNames.Message,
    });

    return {
      submitButton,
      cancelButton,
      titleInput,
    };
  }

  protected getInternalEvents(): TEvents {
    return {
      submit: (event): void => {
        event.preventDefault();

        const entries = getFormDataEntries(event);

        const validationResults = validateForm(entries);

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

          chatController.deleteChat(message);
        }
      },
    };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
    });
  }
}
