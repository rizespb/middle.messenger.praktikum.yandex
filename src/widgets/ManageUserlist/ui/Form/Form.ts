import { Block, IChildren, TEvents } from '@/shared/render';
import { BaseInput, Button } from '@/shared/ui';
import { covertFormEntries, getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import tmpl from './Form.hbs?raw';
import classes from './Form.module.scss';
import { IFormProps } from './Form.interfaces';
import { TEXTS, loginInput } from './Form.constants';

export class Form extends Block<IFormProps> {
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

        if (isValidationPassed) {
          const data = covertFormEntries(entries);
          console.log(this.props.mode, data);
        }
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
