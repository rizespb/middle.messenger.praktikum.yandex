import { classNames } from '@/shared/utils';
import { Icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Block, IChildren } from '@/shared/render';
import tmpl from './ShowActionsIcon.hbs?raw';
import classes from './ShowActionsIcon.module.scss';
import { SHOW_MORE_ICON_ID } from './ShowActionsIcon.constants';
import { IShowActionsIconProps } from './ShowActionsIcon.interfaces';

export class ShowActionsIcon extends Block<IShowActionsIconProps> {
  protected getInternalChildren(): IChildren {
    const icon = new Icon({
      icon: EIcons.ShowMore,
      iconClass: classNames({
        [classes.showMoreIcon]: true,
        [classes.showMoreIcon__active]: this.props.isPopupOpened,
      }),
      containerClass: classNames({
        [classes.showMoreIconContainer]: true,
        [classes.showMoreIconContainer__active]: this.props.isPopupOpened,
      }),
      id: SHOW_MORE_ICON_ID,
      events: {
        click: (): void => {
          this.props.onClick();
        },
      },
    });

    return {
      icon,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
