import { IBlockProps } from '@/shared/render';
import { WSClient } from '@/shared/services';

export interface IMessageInputProps extends IBlockProps {
  socketClient?: WSClient | null;
}
