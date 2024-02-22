import { Block, IChildren } from '@/shared/render';
import { validator } from '@/shared/services';
import tmpl from './InteractiveInput.hbs?raw';
import classes from './InteractiveInput.module.scss';
import { IInteractiveInputProps } from './InteractiveInput.interfaces';
import { Input } from '../Input';

export class InteractiveInput extends Block<IInteractiveInputProps> {
  protected getInternalChildren(): IChildren {
    const { type, name, placeholder, isDisabled } = this.props;

    const validateInput = (event: FocusEvent | KeyboardEvent): void => {
      const { value } = event.target as HTMLInputElement;

      const { isError, errorMessage } = validator.test(name, value);

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

    // Если нажать клавишу Enter, это стриггерит отправку формы и фокус у инпута будет потерян. В результате будет выполнен blur на элементе, которого уже нет в DOM (после this.setProps в getInternalChildren уже был выполнен replaceWith)
    let isEnterPressed = false;

    const input = new Input({
      type,
      name,
      placeholder,
      isDisabled,
      className: classes.input,
      events: {
        blur: (event): void => {
          if (isEnterPressed) {
            isEnterPressed = false;
            return;
          }

          validateInput(event);
        },
        keypress: (event): void => {
          if (event.key === 'Enter') {
            isEnterPressed = true;
          }
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
