import { EPages } from '@/shared/constants';
import { IBaseProps } from '@/shared/render';

export interface IPageMapItem {
  code: EPages;
  title: string;
}

export interface INavigationProps extends IBaseProps {
  onNavItemClick: (pageCode: EPages) => void;
}
