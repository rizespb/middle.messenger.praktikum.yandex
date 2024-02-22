// import { compile } from '@/shared/utils';
// import { icon } from '@/shared/ui';
// import { EIcons } from '@/shared/types';
// import { popup } from '@/shared/ui/';
import { Block, IChildren } from '@/shared/render';
import { ActionsList, Icon, Popup } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { actionsData } from './AddAttachment.constants';
import tmpl from './AddAttachment.hbs?raw';
import classes from './AddAttachment.module.scss';

export class AddAttachment extends Block {
  protected getInternalChildren(): IChildren {
    const isPopupOpened = false;

    const addFileIcon = new Icon({
      icon: EIcons.ClipIcon,
      iconClass: classes.icon,
    });

    const actions = new ActionsList({ actionsData });

    const popup = new Popup({
      content: actions,
      direction: 'topLeft',
      isPopupOpened,
    });

    return {
      addFileIcon,
      popup,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
