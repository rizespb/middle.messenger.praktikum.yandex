import { Block, IChildren, TEvents } from '@/shared/render';
import { validateForm } from '@/shared/services';
import { Input } from '@/shared/ui/Input';
import { covertFormEntries, getFormDataEntries } from '@/shared/utils';
import tmpl from './ChatSearch.hbs?raw';
import classes from './ChatSearch.module.scss';
import { SEARCH_INPUT_ID, inputData } from './ChatSearch.constants';

export class ChatSearch extends Block {
  protected getInternalChildren(): IChildren {
    const input = new Input({
      name: inputData.name,
      placeholder: inputData.title,
      className: classes.input,
    });

    return {
      input,
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

        const isValidationPassed = !validationResults[0].isError;

        if (isValidationPassed) {
          covertFormEntries(entries);
        }
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      title: inputData.title,
      name: inputData.name,
      id: SEARCH_INPUT_ID,
    });
  }
}
