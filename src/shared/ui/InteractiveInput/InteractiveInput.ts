import { Block, IChildren } from '@/shared/render';
import { validator } from '@/shared/services';
import tmpl from './InteractiveInput.hbs?raw';
import classes from './InteractiveInput.module.scss';
import { IInteractiveInputProps } from './InteractiveInput.interfaces';
import { Input } from '../Input';

export class InteractiveInput extends Block<IInteractiveInputProps> {
  protected getInternalChildren(): IChildren {
    const { type, name, placeholder, isDisabled, value } = this.props;

    const validateInput = (event: Event): void => {
      const { value: currentValue } = event.target as HTMLInputElement;

      const { isError, errorMessage } = validator.test(name, currentValue);

      if (isError) {
        this.setProps({
          error: errorMessage,
        });
        return;
      }

      this.setProps({
        error: undefined,
      });
    };

    const input = new Input({
      type,
      name,
      placeholder,
      isDisabled,
      className: classes.input,
      value,
      events: {
        change: (event): void => {
          validateInput(event);
        },
      },
    });

    return {
      input,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
