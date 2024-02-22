import { IBlockProps } from '@/shared/render';
import { EInputNames } from '@/shared/types';

export interface IBaseInputProps extends IBlockProps {
  label?: string;
  name: EInputNames;
  placeholder: string;
  type?: HTMLInputElement['type'];
  error?: string;
}
