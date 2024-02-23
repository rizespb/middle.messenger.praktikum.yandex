import { Block } from '@/shared/render';
import tmpl from './Form.hbs?raw';
import classes from './Form.module.scss';
import { IFormProps } from './Form.interfaces';

export class Form extends Block<IFormProps> {
  protected render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
