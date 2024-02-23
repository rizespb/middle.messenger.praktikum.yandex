import { Block, IChildren, TEvents } from '@/shared/render';
import { BaseInput, Button } from '@/shared/ui';
import { getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import tmpl from './Form.hbs?raw';
import classes from './Form.module.scss';
import { IManageUserlistFormProps } from './Form.interfaces';
import { loginInput } from './Form.constants';

export class Form extends Block<IManageUserlistFormProps> {
  protected getInternalChildren(): IChildren {
    const input = new BaseInput({
      label: loginInput.label,
      name: loginInput.name,
      placeholder: loginInput.label,
    });

    const button = new Button({
      title: this.props.buttonTitle,
      type: 'submit',
      kind: 'primary',
    });

    return {
      input,
      button,
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
          entries.forEach(([name, value]) => {
            console.log(`${name}: `, value);
          });
        }
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
