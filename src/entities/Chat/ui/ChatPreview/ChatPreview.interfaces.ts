import { IBlockProps } from '@/shared/render';

export interface IChatPreviewProps extends IBlockProps {
  title: string;
  lastMessage: string;
  date: string | null;
  newMessagesCount?: number;
  avatarSrc?: string;
  avatarAlt?: string;
  id: number;
}
