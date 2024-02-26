import { IBlockProps } from '@/shared/render';
import { EMessageDirection, EMessageStatus } from './message';

export interface IRenderMessageProps extends IBlockProps {
  content: string;
  time: string;
  status: EMessageStatus;
  direction: EMessageDirection;
}
