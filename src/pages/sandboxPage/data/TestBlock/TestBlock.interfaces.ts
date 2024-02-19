import { IBaseProps } from '@/shared/render';
import { ButtonBlock } from '../ButtonBlock';

export interface ITestBlockProps extends IBaseProps {
  text: string;
  button: ButtonBlock;
}
