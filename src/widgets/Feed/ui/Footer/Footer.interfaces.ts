import { IBlockProps } from '@/shared/render';
import { WSClient } from '../../api';

export interface IFooterProps extends IBlockProps {
  socketClient: WSClient | null;
}
