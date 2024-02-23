import { Block, IBlockProps } from '@/shared/render';

export interface IModalWindowProps extends IBlockProps {
  title: string;
  titleColor?: 'primary' | 'error';
  isModalOpened: boolean;
  children: {
    content: Block;
  };
}
