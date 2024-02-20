import { compile } from '@/shared/utils';
import { button } from '@/shared/ui';
import { Block } from '@/shared/render';
import tmpl from './Actions.hbs?raw';
import classes from './Actions.module.scss';
import { ACTIONS } from './Actions.constants';

export const actions = (): THtml => {
  const actionsArray = ACTIONS.map((action) => button(action));

  return compile(tmpl)({ classes, actions: actionsArray });
};

export class Actions extends Block {
  render(): DocumentFragment {
    return this.compile('<div>Actions</div>', { classes });
  }
}
