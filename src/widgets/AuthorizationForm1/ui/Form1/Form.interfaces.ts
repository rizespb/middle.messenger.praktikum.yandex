import { Block, IBlockProps } from '@/shared/render';

export interface IFormProps extends IBlockProps {
  passwordsError?: string;
  children: {
    buttons: Block[];
    inputs: Block[];
  };
}
