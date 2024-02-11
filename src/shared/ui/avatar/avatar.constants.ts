import { TAvatarSize } from './avatar.interfaces';
import classes from './avatar.module.scss';

export const sizesMap: Record<TAvatarSize, string> = {
  large: classes.large,
  medium: classes.medium,
  small: classes.small,
};
