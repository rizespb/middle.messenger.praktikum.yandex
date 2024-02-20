import { Block, IBlockProps, IChildren } from '@/shared/render';
import { Icon, PopupAction } from '@/shared/ui';
import { actionsData } from './ActionsList.constants';
import tmpl from './ActionsList.hbs?raw';
import classes from './ActionsList.module.scss';

export class ActionsList extends Block {
  getInternalChildren(): IChildren<Block<IBlockProps>> {
    const actions = actionsData.map((action) => {
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
