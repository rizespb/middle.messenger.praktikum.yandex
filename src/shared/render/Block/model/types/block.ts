import { TEvents } from './events';

export interface IBlockProps {
  events?: TEvents;
}

export type TPropsWithOutChildren<T extends IBlockProps> = Omit<T, 'children'>;

export interface IBlock<T extends IBlockProps = IBlockProps> {
  id: TUuid;
  dispatchComponentDidMount: () => void;
  getContent: () => HTMLElement;
  setProps: (nextProps: Partial<T>) => void;
  show: () => void;
  hide: () => void;
}

export type TAnyObject<T = unknown> = {
  [key: PropertyKey]: T;
};

export interface IChildren<T extends IBlock = IBlock> {
  [key: PropertyKey]: T | T[];
}
