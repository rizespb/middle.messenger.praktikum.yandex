import { Block, IBlockProps } from '@/shared/render';

export interface ICenterContentLayoutProps extends IBlockProps {
  children: {
    content: Block;
  };
}
