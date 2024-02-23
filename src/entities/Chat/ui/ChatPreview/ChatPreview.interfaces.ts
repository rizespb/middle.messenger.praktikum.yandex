import { IBlockProps } from '@/shared/render';

export interface IChatPreviewProps extends IBlockProps {
  title: string;
  lastMessage: string;
  time: string;
  newMessagesCount?: string;
  avatarSrc?: string;
  avatarAlt?: string;
}
