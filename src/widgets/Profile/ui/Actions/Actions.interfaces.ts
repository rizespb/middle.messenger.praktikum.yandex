import { IBlockProps } from '@/shared/render';

export interface IActionsProps extends IBlockProps {
  changePersonalDetails: () => void;
  changePasswrod: () => void;
}
