import { avatar } from '@/shared/ui';
import avatarFallback from '@/shared/assets/avatarFallback.webp';
import { compile } from '@/shared/utils';
import { Block } from '@/shared/render';
import { IUserAvatarProps } from './UserAvatar.interfaces';
import { TEXTS } from './UserAvatar.constants';
import tmpl from './UserAvatar.hbs?raw';
import classes from './UserAvatar.module.scss';

export const userAvatar = ({ imageSrc }: IUserAvatarProps): THtml => {
  const avatarStr = avatar({
    avatarSrc: imageSrc || avatarFallback,
    avatarAlt: TEXTS.alt,
    size: 'large',
    className: classes.userAvatar,
  });

  return compile(tmpl)({
    avatar: avatarStr,
    hoverText: TEXTS.hoverText,
    classes,
  });
};

export class UserAvatar extends Block<IUserAvatarProps> {
  render(): DocumentFragment {
    return this.compile('<div>UserAvatar</div>', { classes });
  }
}
