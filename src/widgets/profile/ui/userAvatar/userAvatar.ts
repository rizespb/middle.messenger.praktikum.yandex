import { avatar } from '@/shared/ui';
import avatarFallback from '@/shared/assets/avatarFallback.webp';
import { compile } from '@/shared/utils';
import { IUserAvatarProps } from './userAvatar.interfaces';
import { TEXTS } from './userAvatar.constants';
import tmpl from './userAvatar.hbs?raw';
import classes from './userAvatar.module.scss';

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
