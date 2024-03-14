import { IBlockProps } from '@/shared/render';

export interface ILinkProps extends IBlockProps {
  href: string;
  text: string;
  classname?: string;
}
