import { IChat } from '@/entities/Chat';
import { IBlockProps } from '@/shared/render';

export interface IChatsListProps extends IBlockProps {
  chats?: IChat[];
}
