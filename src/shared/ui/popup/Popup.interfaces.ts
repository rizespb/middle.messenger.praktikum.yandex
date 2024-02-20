import { Block, IBlockProps } from '@/shared/render';

interface IAction {
  text: string;
  icon: Block;
}

type TPopupDirection = 'bottomRight' | 'topLeft';

export interface IPopupUpProps extends IBlockProps {
  actions: IAction[];
  direction: TPopupDirection;
  isPopupOpened: boolean;
}
