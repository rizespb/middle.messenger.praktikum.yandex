import { Block, IBlockProps } from '@/shared/render';

export interface IPopupActionProps extends IBlockProps {
  text: string;
  id?: string;
  children: {
    icon: Block;
  };
}
