import { Block, IBlockProps } from '@/shared/render';

export interface IActionProps extends IBlockProps {
  text: string;
  icon: Block;
  id?: string;
}
