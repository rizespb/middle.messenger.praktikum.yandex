import { IBlockProps } from '@/shared/render';

export type TSnackBarType = 'error' | 'success';
export interface ISnackBarProps extends IBlockProps {
  isVisivle?: boolean;
  message?: string;
  type?: TSnackBarType | null;
}
