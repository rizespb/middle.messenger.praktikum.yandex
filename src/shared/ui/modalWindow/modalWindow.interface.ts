import { Block, IBlockProps } from '@/shared/render';

export interface IModalWindowProps extends IBlockProps {
  content: Block;
  title: string;
  titleColor?: 'primary' | 'error';
  isModalOpened: boolean;
}
