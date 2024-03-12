import { IBlockProps } from '@/shared/render';

export interface IChatPreviewProps extends IBlockProps {
  title: string;
  lastMessage: string;
  time?: string;
  newMessagesCount?: number;
  avatarSrc?: string;
  avatarAlt?: string;
  id: number;
}
