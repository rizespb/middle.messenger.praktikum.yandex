import { IBlockProps } from '@/shared/render';

export interface IActionsPopupProps extends IBlockProps {
  isPopupOpened: boolean;
  onAddUserClick: () => void;
  onDeleteUserClick: () => void;
}
