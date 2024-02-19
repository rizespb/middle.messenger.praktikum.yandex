import { TEvents } from './events';

export type TAnyObject<T = unknown> = {
  [key: PropertyKey]: T;
};

export interface IChildren<T> {
  [key: PropertyKey]: T;
}
export interface IBaseProps {
  events?: TEvents;
  children?: TAnyObject;
}

export type TPropsWithOutChildren<T extends IBaseProps> = Omit<T, 'children'>;
