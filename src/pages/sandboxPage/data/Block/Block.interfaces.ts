import { EventBus } from '../eventBus/eventBus';

export enum EBlockEvents {
  INIT = 'init',
  MOUNT = 'flow:component-did-mount',
  UPDATE = 'flow:component-did-update',
  RENDER = 'flow:render',
}

export type TBlockEventBus = EventBus<EBlockEvents>;

type TEvents = {
  [key in keyof GlobalEventHandlersEventMap]?: (event: GlobalEventHandlersEventMap[key]) => void;
};

export interface IPropsWithEvents {
  events?: TEvents;
}
