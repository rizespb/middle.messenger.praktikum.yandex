export type TAvatarSize = 'small' | 'medium' | 'large';

export interface IAvatarProps {
  size: TAvatarSize;
  avatarSrc?: string;
  avatarAlt?: string;
}
