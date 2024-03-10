import { IUser } from '@/entities/User';
import { IBlockProps } from '@/shared/render';

export interface IPersonalDetailsFormProps extends IBlockProps {
  profileMode?: IAppState['profileMode'];
  user?: IUser;
}

export interface IPersonalDetailsFormData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  display_name: string;
  phone: string;
}
