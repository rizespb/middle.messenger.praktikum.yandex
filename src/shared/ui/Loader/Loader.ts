import { Block } from '@/shared/render';
import tmpl from './Loader.hbs?raw';
import classes from './Loader.module.scss';

export class Loader extends Block {
  protected render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
