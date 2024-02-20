import { Block } from '@/shared/render';
import tmpl from './InteractiveInput.hbs?raw';
import classes from './InteractiveInput.module.scss';
import { IInteractiveInputProps } from './InteractiveInput.interfaces';

export class InteractiveInput extends Block<IInteractiveInputProps> {
  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
