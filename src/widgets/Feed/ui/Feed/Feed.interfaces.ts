import { IBlockProps } from '@/shared/render';
import { WSClient } from '@/shared/services';

export interface IFeedProps extends IBlockProps {
  chatId?: number | null;
  userId?: number;
  socketClient?: WSClient | null;
}

export interface IWSMessage {
  id: number;
  chat_id?: number;
  time: string;
  type: string;
  user_id: string;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}
