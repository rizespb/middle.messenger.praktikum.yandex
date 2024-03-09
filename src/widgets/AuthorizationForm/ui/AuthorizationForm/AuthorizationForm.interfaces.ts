import { Block, IBlockProps } from '@/shared/render';

export interface IAuthorizationFormProps<T> extends IBlockProps {
  title: string;
  buttons: Block[];
  inputs: Block[];
  passwordsError?: string;
  onSubmit: (data: T) => void;
}

export interface ISignUpUserData {
  email: string;
  first_name: string;
  login: string;
  newPassword: string;
  passwordRepeat: string;
  phone: string;
  second_name: string;
}
