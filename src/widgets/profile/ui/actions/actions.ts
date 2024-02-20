import { Button } from '@/shared/ui';
import { Block, IChildren } from '@/shared/render';
import tmpl from './Actions.hbs?raw';
import classes from './Actions.module.scss';
import { actionsData } from './Actions.constants';

export class Actions extends Block {
  protected getInternalChildren(): IChildren<Block> {
    const actions = actionsData.map((action) => new Button(action));

    return { actions };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
