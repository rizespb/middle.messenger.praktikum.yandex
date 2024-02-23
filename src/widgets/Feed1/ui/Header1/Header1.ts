import { Avatar } from '@/shared/ui';
import { Block, IChildren } from '@/shared/render';
import { ManageUserlist } from '@/widgets/ManageUserlist';
import tmpl from './Header.hbs?raw';
import { IHeaderProps } from './Header.interfaces';
import classes from './Header.module.scss';

export class Header extends Block<IHeaderProps> {
  getInternalChildren(): IChildren {
    const image = new Avatar({
      size: 'small',
      avatarAlt: this.props.title,
      avatarSrc: this.props.imageSrc,
    });

    const manageUserlist = new ManageUserlist({});

    return {
      image,
      manageUserlist,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
