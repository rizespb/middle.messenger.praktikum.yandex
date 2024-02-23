import { Block, IChildren, TEvents } from '@/shared/render';
import { Button, InteractiveInput } from '@/shared/ui';
import { getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import { comparePasswords } from '@/shared/services/validator';
import { IFormProps } from './Form.interfaces';
import { profileInputsData, changePasswordInputsData } from '../../model';
import tmpl from './Form.hbs?raw';
import classes from './Form.module.scss';
import { UserAvatar } from '../UserAvatar';
import { TEXTS } from './Form.constants';

export class Form extends Block<IFormProps> {
  protected getInternalChildren(): IChildren {
    const { mode, isEditMode } = this.props;

    const userAvatar = new UserAvatar({});

    const inputsData = mode === 'personalDetails' ? profileInputsData : changePasswordInputsData;

    const inputs = inputsData.map((input) => {
      const { name, title, type } = input;

      return new InteractiveInput({
        label: title,
        name,
        placeholder: title,
        isDisabled: !isEditMode,
        type,
      });
    });

    const submitButton = new Button({
      title: TEXTS.submitButton,
      type: 'submit',
      className: classes.submitButtom,
      kind: 'primary',
    });

    const children: IChildren = {
      userAvatar,
      inputs,
      submitButton,
    };

    return children;
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
          entries.forEach(([name, value]) => {
            console.log(`${name}: `, value);
          });
        }
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      firstName: 'Иван',
    });
  }
}
