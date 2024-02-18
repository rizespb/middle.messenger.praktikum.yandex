import { Block } from '../Block/Block';
import { IButtonBlockProps } from './ButtonBlock.interfaces';
import template from './ButtonBlock.hbs?raw';
import classes from './ButtonBlock.module.scss';

export class ButtonBlock extends Block<IButtonBlockProps> {
  constructor(props: IButtonBlockProps) {
    // Создаём враппер дом-элемент button
    super(props, 'button');
  }

  render(): THtml {
    // В проекте должен быть ваш собственный шаблонизатор
    return this.compile(template, classes);
  }
}
