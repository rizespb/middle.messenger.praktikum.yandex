import { IBlockProps } from '@/shared/render';

export interface IInputProps extends IBlockProps {
  name: string;
  placeholder: string;
  type?: HTMLInputElement['type'];
  className: string;
}
