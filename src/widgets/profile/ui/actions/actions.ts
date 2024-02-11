import { compile } from '@/shared/utils';
import { button } from '@/shared/ui';
import tmpl from './actions.hbs?raw';
import classes from './actions.module.scss';
import { ACTIONS } from './actions.constants';

export const actions = (): THtml => {
  const actionsArray = ACTIONS.map((action) => button(action));

  return compile(tmpl)({ classes, actions: actionsArray });
};
