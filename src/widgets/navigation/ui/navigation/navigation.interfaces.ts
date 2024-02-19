import { EPages } from '@/shared/constants';
import { IBlockProps } from '@/shared/render';

export interface IPageMapItem {
  code: EPages;
  title: string;
}

export interface INavigationProps extends IBlockProps {
  onNavItemClick: (pageCode: EPages) => void;
}
