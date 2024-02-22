import { IBlockProps } from '@/shared/render';
import { EInputNames } from '@/shared/types';

export interface IInputProps extends IBlockProps {
  name: EInputNames;
  placeholder: string;
  type?: HTMLInputElement['type'];
  className: string;
}
