import { Block } from '@/shared/render';
import { ITestBlockProps } from './TestBlock.interfaces';
import template from './TestBlock.hbs?raw';
import classes from './TestBlock.module.scss';

export class TestBlock extends Block<ITestBlockProps> {
  render(): DocumentFragment {
    return this.compile(template, classes);
  }
}
