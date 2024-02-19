import { TEvents } from './events';

export type TAnyObject<T = unknown> = {
  [key: PropertyKey]: T;
};

export interface IChildren<T> {
  [key: PropertyKey]: T | T[];
}
export interface IBlockProps {
  events?: TEvents;
}

export type TPropsWithOutChildren<T extends IBlockProps> = Omit<T, 'children'>;
