import { Block, IBlockProps } from '@/shared/render';

export interface IAuthorizationFormProps extends IBlockProps {
  title: string;
  buttons: Block[];
  inputs: Block[];
  passwordsError?: string;
}
