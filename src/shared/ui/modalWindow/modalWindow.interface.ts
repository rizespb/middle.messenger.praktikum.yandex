import { IBlockProps } from '@/shared/render';

export interface IModalWindowProps extends IBlockProps {
  content: THtml;
  title: string;
  titleColor?: 'primary' | 'error';
}
