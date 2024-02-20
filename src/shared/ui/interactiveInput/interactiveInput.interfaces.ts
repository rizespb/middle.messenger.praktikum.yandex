import { IBlockProps } from '@/shared/render';

export interface IInteractiveInputProps extends IBlockProps {
  label: string;
  name: string;
  placeholder: string;
  type?: HTMLInputElement['type'];
  error?: string;
  isDisabled: boolean;
}
