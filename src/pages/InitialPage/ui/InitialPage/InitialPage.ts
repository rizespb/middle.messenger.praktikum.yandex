import { Block } from '@/shared/render';
import spinner from '@/shared/assets/spinner.gif';
import tmpl from './InitialPage.hbs?raw';
import classes from './InitialPage.module.scss';

export class InitialPage extends Block {
  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      spinner,
    });
  }
}
