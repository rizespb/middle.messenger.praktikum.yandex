import { IMessagesGroup } from '@/entities/Message';
import { IBlockProps } from '@/shared/render';

export interface IChatProps extends IBlockProps {
  messagesGroups: IMessagesGroup[];
}
