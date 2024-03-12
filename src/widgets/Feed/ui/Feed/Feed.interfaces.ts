import { IChat } from '@/entities/Chat';
import { IMessage } from '@/entities/Message';
import { IBlockProps } from '@/shared/render';
import { WSClient } from '@/shared/services';

export interface IFeedProps extends IBlockProps {
  chatId?: number | null;
  userId?: number;
  socketClient?: WSClient | null;
  chatMessages?: IMessage[];
  chats?: IChat[] | null;
}
