import { Block, IBlockProps } from '@/shared/render';

export interface IFormProps<T> extends IBlockProps {
  isButtonsVisible: boolean;
  passwordsError?: string;
  children: {
    inputs: Block[];
  };
  onSubmit: (data: T) => void;
}
