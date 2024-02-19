import { IBlockProps } from '@/shared/render';
import { ButtonBlock } from '../ButtonBlock';

export interface ITestBlockProps extends IBlockProps {
  text: string;
  button: ButtonBlock;
}
