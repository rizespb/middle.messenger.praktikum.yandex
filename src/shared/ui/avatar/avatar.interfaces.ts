import { IBlockProps } from '@/shared/render';

export type TAvatarSize = 'small' | 'medium' | 'large';

export interface IAvatarProps extends IBlockProps {
  size: TAvatarSize;
  avatarSrc?: string;
  avatarAlt?: string;
  className?: string;
}
