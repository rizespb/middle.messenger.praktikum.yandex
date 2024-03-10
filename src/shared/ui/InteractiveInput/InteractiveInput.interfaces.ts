import { IBlockProps } from '@/shared/render';
import { EInputNames } from '@/shared/types';

export interface IInteractiveInputProps extends IBlockProps {
  label: string;
  name: EInputNames;
  placeholder: string;
  type?: HTMLInputElement['type'];
  error?: string;
  isDisabled: boolean;
  value?: string;
}
