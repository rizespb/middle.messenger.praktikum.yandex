import { Block, IChildren } from '@/shared/render';
import { Icon } from '../../Icon';
import tmpl from './ActionsList.hbs?raw';
import classes from './ActionsList.module.scss';
import { PopupAction } from '../PopupAction';
import { IActionsListProps } from './ActionsList.interfaces';

export class ActionsList extends Block<IActionsListProps> {
  getInternalChildren(): IChildren<Block> {
    const actions = this.props.actionsData.map((action) => {
      const { text, icon, iconClass, containerClass } = action;

      const iconBlock = new Icon({
        icon,
        iconClass,
        containerClass,
      });

      const actionBlock = new PopupAction({
        text,
        icon: iconBlock,
      });

      return actionBlock;
    });

    return {
      actions,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
