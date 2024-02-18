import { Block } from '../Block';
import { IButtonBlockProps } from './ButtonBlock.interfaces';
import template from './ButtonBlock.hbs?raw';
import classes from './ButtonBlock.module.scss';

export class ButtonBlock extends Block<IButtonBlockProps> {
  render(): THtml {
    return this.compile(template, classes);
  }
}
