import { Block, IBlockProps } from '@/shared/render';

export interface IPopupActionProps extends IBlockProps {
  text: string;
  icon: Block;
  id?: string;
}
