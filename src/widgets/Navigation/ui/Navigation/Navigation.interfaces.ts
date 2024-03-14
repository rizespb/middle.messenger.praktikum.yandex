import { IBlockProps } from '@/shared/render';

export interface INavLink {
  href: string;
  text: string;
}

export interface INavigationProps extends IBlockProps {
  links: INavLink[];
}
