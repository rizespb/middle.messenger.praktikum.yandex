import { Block, IBaseProps } from '@/shared/render';

export interface ICenterContentLayoutProps extends IBaseProps {
  content: string | THtml | Block;
}
