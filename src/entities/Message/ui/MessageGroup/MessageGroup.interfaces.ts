import { IBlockProps } from '@/shared/render';
import { IMessage } from '../../model';

export interface IMessageGroupProps extends IBlockProps {
  date: string;
  messages: IMessage[];
}
