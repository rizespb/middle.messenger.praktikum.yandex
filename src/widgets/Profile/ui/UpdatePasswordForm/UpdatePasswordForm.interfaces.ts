import { IUser } from '@/entities/User';
import { IBlockProps } from '@/shared/render';

export interface IPersonalDetailsFormProps extends IBlockProps {
  isEditMode?: boolean;
  user?: IUser;
}

export interface IUpdatePasswordsFormData {
  password: string;
  newPassword: string;
  passwordRepeat: string;
}
