import { IBlockProps } from '@/shared/render';

export type TFormMode = 'addUser' | 'deleteUser';
export interface IFormProps extends IBlockProps {
  mode?: TFormMode;
  onCancel: () => void;
  currentChatId?: number | null;
}
