import { classNames, compile } from '@/shared/utils';
import { IAvatarProps } from './avatar.interfaces';
import tmpl from './avatar.hbs?raw';
import classes from './avatar.module.scss';
import { sizesMap } from './avatar.constants';

export const avatar = (props: IAvatarProps): THtml => {
  const { size, avatarAlt, avatarSrc, className } = props;

  const avatarClassName = classNames({
    [classes.image]: true,
    [sizesMap[size]]: true,
    [className]: Boolean(className),
  });

  return compile(tmpl)({
    className: avatarClassName,
    avatarAlt,
    avatarSrc,
  });
};
