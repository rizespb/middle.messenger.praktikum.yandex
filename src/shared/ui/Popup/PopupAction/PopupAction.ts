import { Block, TEvents } from '@/shared/render';
import { IPopupActionProps } from './PopupAction.interfaces';
import tmpl from './PopupAction.hbs?raw';
import classes from './PopupAction.module.scss';

export class PopupAction extends Block<IPopupActionProps> {
  protected getInternalEvents(): TEvents {
    return {
      click: (): void => {
        this.props.onClick();
      },
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
