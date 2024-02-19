import { IBlockProps } from '@/shared/render';

export interface IBaseInputProps extends IBlockProps {
  label?: string;
  name: string;
  placeholder: string;
  type?: HTMLInputElement['type'];
  error?: string;
}
