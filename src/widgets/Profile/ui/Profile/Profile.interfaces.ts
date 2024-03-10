import { IBlockProps } from '@/shared/render';

export interface IProfileProps extends IBlockProps {
  profileMode?: IAppState['profileMode'];
  isUpdatePhotoFormVisible?: boolean;
}
