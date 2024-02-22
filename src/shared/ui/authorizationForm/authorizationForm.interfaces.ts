import { Block, IBlockProps } from '@/shared/render';

export interface IAuthorizationFormProps extends IBlockProps {
  title: string;
  children: {
    buttons: Block[];
    inputs: Block[];
  };
}
