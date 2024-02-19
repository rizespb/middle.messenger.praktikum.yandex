import { IBlockProps } from '@/shared/render';

export interface IButtonProps extends IBlockProps {
  title: string;
  type: 'button' | 'submit';
  kind: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}
