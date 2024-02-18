import { IBaseProps } from '../Block';
import { ButtonBlock } from '../ButtonBlock';

export interface ITestBlockProps extends IBaseProps {
  text: string;
  button: ButtonBlock;
}
