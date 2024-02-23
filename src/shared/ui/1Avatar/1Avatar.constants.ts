import { TAvatarSize } from './1Avatar.interfaces';
import classes from './Avatar.module.scss';

export const sizesMap: Record<TAvatarSize, string> = {
  large: classes.large,
  medium: classes.medium,
  small: classes.small,
};
