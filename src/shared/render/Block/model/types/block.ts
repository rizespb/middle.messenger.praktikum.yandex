import { TEvents } from './events';

export interface IBlockProps {
  events?: TEvents;
  // eslint-disable-next-line no-use-before-define
  children?: IChildren;
}

export type TClearProps<T extends IBlockProps> = Omit<T, 'children' | 'events'>;

export interface IBlock<T extends IBlockProps = IBlockProps> {
  id: TUuid;
  dispatchComponentDidMount: () => void;
  getContent: () => HTMLElement;
  setProps: (nextProps: Partial<TClearProps<T>>) => void;
  setChildren: (nextChildren: Partial<T['children']>) => void;
  show: () => void;
  hide: () => void;
}

export type TAnyObject<T = unknown> = {
  [key: PropertyKey]: T;
};

export interface IChildren {
  [key: PropertyKey]: IBlock | IBlock[];
}
