import { IBlockProps } from '@/shared/render';
import { EInputNames } from '@/shared/types';

export interface IInputProps extends IBlockProps {
  name: EInputNames;
  placeholder: string;
  className: string;
  type?: HTMLInputElement['type'];
  isDisabled?: boolean;
  value?: string;
}
