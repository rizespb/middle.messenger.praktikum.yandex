import { IBlockProps } from '@/shared/render';
import { EIcons } from '@/shared/types';

export interface IActionData {
  text: string;
  icon: EIcons;
  iconClass: string;
  containerClass?: string;
}

export interface IActionsListProps extends IBlockProps {
  actionsData: IActionData[];
}
