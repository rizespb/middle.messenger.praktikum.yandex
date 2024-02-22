import { Block, IChildren } from '@/shared/render';
import { validateForm } from '@/shared/services';
import { getFormDataEntries } from '@/shared/utils';
import { comparePasswords } from '@/shared/services/validator';
import { IAuthorizationFormProps } from './AuthorizationForm.interfaces';
import tmpl from './AuthorizationForm.hbs?raw';
import classes from './AuthorizationForm.module.scss';
import { Form } from '../Form';

export class AuthorizationForm extends Block<IAuthorizationFormProps> {
  protected getInternalChildren(): IChildren {
    const { inputs, buttons } = this.props;

    const form = new Form({
      children: {
        inputs,
        buttons,
      },
      events: {
        submit: (event): void => {
          event.preventDefault();
          if (!event) {
            return;
          }
          const entries = getFormDataEntries(event);

          const validationResults = validateForm(entries);

          let isValidationPassed = true;

          validationResults.forEach((result, index) => {
            const { isError, errorMessage } = result;

            if (isError) {
              isValidationPassed = false;
              inputs[index].setProps({ error: errorMessage });
            }
          });

          const { isError: isComparePasswordsFailed, errorMessage } = comparePasswords(entries);

          if (isComparePasswordsFailed) {
            form.setProps({ passwordsError: errorMessage });
          }

          if (isValidationPassed && !isComparePasswordsFailed) {
            entries.forEach(([name, value]) => {
              console.log(`${name}: `, value);
            });
          }
        },
      },
    });

    return {
      form,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
