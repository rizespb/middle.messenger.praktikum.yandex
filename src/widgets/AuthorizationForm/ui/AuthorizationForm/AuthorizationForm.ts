import { Block, IChildren } from '@/shared/render';
import { EInputNames } from '@/shared/types';
import { IError, validator } from '@/shared/services';
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

          const data = [...new FormData(event.currentTarget as HTMLFormElement).entries()];

          const validationResults = data.map<IError>((input) => {
            const [name, value] = input as [EInputNames, string];

            const result = validator.test(name, value);
            return result;
          });

          const isErrorExist = false;

          validationResults.forEach((result, index) => {
            const { isError, errorMessage } = result;
            if (isError) {
              inputs[index].setProps({ error: errorMessage });
            }
          });

          if (!isErrorExist) {
            data.forEach(([name, value]) => {
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
