import { Block, IBlockProps } from '@/shared/render';

export interface ICenterContentLayoutProps extends IBlockProps {
  content: string | THtml | Block;
}
