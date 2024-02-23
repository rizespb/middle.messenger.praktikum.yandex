import { IBlockProps } from '@/shared/render';
import { EIcons } from '@/shared/types';

export interface IIconProps extends IBlockProps {
  iconClass: string;
  icon: EIcons;
  containerClass?: string;
  id?: string;
}
