import { Block } from '@/shared/render';
import { IBaseInputProps } from './BaseInput.interfaces';
import tmpl from './BaseInput.hbs?raw';
import classes from './BaseInput.module.scss';

export class BaseInput extends Block<IBaseInputProps> {
  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
