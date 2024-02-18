import { EventBus } from '../eventBus/eventBus';

export enum EBlockEvents {
  INIT = 'init',
  MOUNT = 'flow:component-did-mount',
  UPDATE = 'flow:component-did-update',
  RENDER = 'flow:render',
}

export type TBlockEventBus = EventBus<EBlockEvents>;

export type TAnyObject<T = unknown> = {
  [key: PropertyKey]: T;
};

type TEvents = {
  [key in keyof GlobalEventHandlersEventMap]?: (event: GlobalEventHandlersEventMap[key]) => void;
};

export interface IBlock {}

export interface IChildren<T> {
  // eslint-disable-next-line no-use-before-define
  [key: PropertyKey]: T;
}
export interface IBaseProps {
  events?: TEvents;
  children?: TAnyObject;
}

export type TPropsWithOutChildren<T extends IBaseProps> = Omit<T, 'children'>;
