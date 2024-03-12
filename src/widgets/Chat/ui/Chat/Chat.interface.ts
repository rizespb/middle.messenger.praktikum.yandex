import { IMessage } from '@/entities/Message';
import { IBlockProps } from '@/shared/render';

export interface IChatProps extends IBlockProps {
  chatMessages?: IMessage[];
}
