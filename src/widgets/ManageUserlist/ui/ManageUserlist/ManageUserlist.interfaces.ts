import { IBlockProps } from '@/shared/render';
import { TFormMode } from '../Form';

export interface IManageUserlistProps extends IBlockProps {
  isManageUserlistFormVisible?: boolean;
  isPopupOpened?: boolean;
  formMode?: TFormMode;
}
