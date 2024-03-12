import { IBlockProps } from '@/shared/render';

export interface IChatProps extends IBlockProps {
  chatId: number | null;
}
