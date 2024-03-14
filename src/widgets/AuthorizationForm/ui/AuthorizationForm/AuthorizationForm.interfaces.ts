import { Block, IBlockProps } from '@/shared/render';

export interface IAuthorizationFormProps<T> extends IBlockProps {
  title: string;
  buttons: Block[];
  inputs: Block[];
  passwordsError?: string;
  onSubmit: (data: T) => void;
}
