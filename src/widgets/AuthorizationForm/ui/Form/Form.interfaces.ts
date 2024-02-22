import { Block, IBlockProps } from '@/shared/render';

export interface IFormProps extends IBlockProps {
  children: {
    buttons: Block[];
    inputs: Block[];
  };
}
