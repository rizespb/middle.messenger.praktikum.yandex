import { IBlockProps } from '@/shared/render';

export interface ISnackBarProps extends IBlockProps {
  isVisivle?: boolean;
  message?: string;
}
