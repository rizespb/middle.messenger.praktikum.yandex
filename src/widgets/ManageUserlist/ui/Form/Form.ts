import { Block, IChildren, TEvents } from '@/shared/render';
import { BaseInput, Button } from '@/shared/ui';
import { covertFormEntries, getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import { chatController } from '@/entities/Chat';
import { connect } from '@/shared/HOC';
import tmpl from './Form.hbs?raw';
import classes from './Form.module.scss';
import { IFormProps } from './Form.interfaces';
import { TEXTS, loginInput } from './Form.constants';

export class FormClass extends Block<IFormProps> {
  protected getInternalChildren(): IChildren {
    if (!this.props.mode) {
      return {};
    }

    const input = new BaseInput({
      label: loginInput.label,
      name: loginInput.name,
      placeholder: loginInput.label,
    });

    const submitButton = new Button({
      title: this.props.mode === 'addUser' ? TEXTS.addUser : TEXTS.deleteUser,
      type: 'submit',
      kind: 'primary',
    });

    const cancelButton = new Button({
      title: TEXTS.cancel,
      type: 'button',
      kind: 'primary',
      events: {
        click: (): void => {
          this.props.onCancel();
        },
      },
    });

    return {
      input,
      submitButton,
      cancelButton,
    };
  }

  protected getInternalEvents(): TEvents {
    return {
      submit: (event): void => {
        event.preventDefault();
        if (!event) {
          return;
        }
        const entries = getFormDataEntries(event);

        const validationResults = validateForm(entries);

        const { isError, errorMessage } = validationResults[0];

        const isValidationPassed = !isError;

        const { input } = this.children;

        if (isError && !Array.isArray(input)) {
          input.setProps({
            error: errorMessage,
          });
        }

        const { mode, currentChatId } = this.props;

        if (!mode || !currentChatId) {
          return;
        }

        if (isValidationPassed) {
          const { login } = covertFormEntries(entries);

          if (mode === 'addUser') {
            chatController.addUser(login, currentChatId).then(() => {
              this.props.onCancel();
            });
          } else if (mode === 'deleteUser') {
            chatController.deleteUser(login, currentChatId).then(() => {
              this.props.onCancel();
            });
          }
        }
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}

export const Form = connect(FormClass, (state) => ({
  currentChatId: state.chat.currentChatId,
}));
