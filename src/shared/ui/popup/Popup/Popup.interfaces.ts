import { Block, IBlockProps } from '@/shared/render';

type TPopupDirection = 'bottomRight' | 'topLeft';

export interface IPopupUpProps extends IBlockProps {
  children: {
    content: Block | Block[];
  };
  direction: TPopupDirection;
  isPopupOpened: boolean;
}
