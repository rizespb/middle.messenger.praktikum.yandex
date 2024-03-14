import { IUser } from '@/entities/User';
import { IBlockProps } from '@/shared/render';

export interface IProfileProps extends IBlockProps {
  profileMode?: IAppState['profileMode'];
  user?: IUser | null;
}
