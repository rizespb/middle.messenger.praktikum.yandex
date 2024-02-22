import { IBlockProps } from '@/shared/render';

export interface IFormProps extends IBlockProps {
  mode: 'personalDetails' | 'password';
  isEditMode: boolean;
}
