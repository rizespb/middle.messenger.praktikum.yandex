import { Block, IChildren, TEvents } from '@/shared/render';
import { Button } from '@/shared/ui';
import { covertFormEntries, getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import { comparePasswords } from '@/shared/services/validator';
import { IFormProps } from './Form.interfaces';
import tmpl from './Form.hbs?raw';
import classes from './Form.module.scss';
import { TEXTS } from './Form.constants';

export class Form<T> extends Block<IFormProps<T>> {
  protected getInternalChildren(): IChildren {
    const submitButton = new Button({
      title: TEXTS.submitButton,
      type: 'submit',
      className: classes.submitButtom,
      kind: 'primary',
    });

    const cancelButton = new Button({
      title: TEXTS.cancelButton,
      type: 'button',
      className: classes.submitButtom,
      kind: 'primary',
      events: {
        click: (): void => {
          appStore.set('profileMode', 'view');
        },
      },
    });

    return {
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

        let isValidationPassed = true;

        const { inputs } = this.children;

        validationResults.forEach((result, index) => {
          const { isError, errorMessage } = result;

          if (isError && Array.isArray(inputs)) {
            isValidationPassed = false;
            inputs[index].setProps({ error: errorMessage });
          }
        });

        const { isError: isComparePasswordsFailed, errorMessage } = comparePasswords(entries);

        if (isComparePasswordsFailed) {
          this.setProps({ passwordsError: errorMessage });

          return;
        }

        if (isValidationPassed) {
          const data = covertFormEntries(entries);

          this.props.onSubmit(data as T);
        }
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
    });
  }
}
