import { Block, IChildren } from '@/shared/render';
import { validator } from '@/shared/services';
import { IBaseInputProps } from './BaseInput.interfaces';
import tmpl from './BaseInput.hbs?raw';
import classes from './BaseInput.module.scss';
import { Input } from '../Input';

export class BaseInput extends Block<IBaseInputProps> {
  protected getInternalChildren(): IChildren {
    const { type, name, placeholder } = this.props;

    const validateInput = (event: Event): void => {
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

    const input = new Input({
      type,
      name,
      placeholder,
      className: classes.input,
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
