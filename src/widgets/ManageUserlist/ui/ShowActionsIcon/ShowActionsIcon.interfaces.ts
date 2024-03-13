import { IBlockProps } from '@/shared/render';

export interface IShowActionsIconProps extends IBlockProps {
  isPopupOpened: boolean;
  onClick: () => void;
}
