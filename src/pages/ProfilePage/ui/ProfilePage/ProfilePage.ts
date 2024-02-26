import { Block, IChildren } from '@/shared/render';
import { Icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Profile } from '@/widgets/Profile';
import tmpl from './ProfilePage.hbs?raw';
import classes from './ProfilePage.module.scss';

export class ProfilePage extends Block {
  protected getInternalChildren(): IChildren {
    const goBackIcon = new Icon({
      icon: EIcons.ArrowIcon,
      iconClass: classes.icon,
    });

    const content = new Profile({});

    return {
      goBackIcon,
      content,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
