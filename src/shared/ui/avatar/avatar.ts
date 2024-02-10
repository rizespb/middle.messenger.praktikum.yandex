import { classNames, compile } from '@/shared/utils';
import { IAvatarProps } from './avatar.interfaces';
import tmpl from './avatar.hbs?raw';
import classes from './avatar.module.scss';
import { sizesMap } from './avatar.constants';

export const avatar = (props: IAvatarProps): THtml => {
  const { size, avatarAlt, avatarSrc } = props;

  const className = classNames([classes.image, sizesMap[size]]);

  return compile(tmpl)({
    className,
    avatarAlt,
    avatarSrc,
  });
};
