import { Avatar } from '@/shared/ui';
import avatarFallback from '@/shared/assets/avatarFallback.webp';
import { Block, IChildren, TEvents } from '@/shared/render';
import { IUserAvatarProps } from './UserAvatar.interfaces';
import { TEXTS } from './UserAvatar.constants';
import tmpl from './UserAvatar.hbs?raw';
import classes from './UserAvatar.module.scss';

export class UserAvatar extends Block<IUserAvatarProps> {
  protected getInternalEvents(): TEvents {
    return {
      click: (): void => {
        appStore.set('isUpdateAvatarFormVisible', true);
      },
    };
  }

  protected getInternalChildren(): IChildren {
    const avatar = new Avatar({
      avatarSrc: this.props.imageSrc || avatarFallback,
      avatarAlt: TEXTS.alt,
      size: 'large',
      className: classes.userAvatar,
    });

    return { avatar };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      hoverText: TEXTS.hoverText,
    });
  }
}
