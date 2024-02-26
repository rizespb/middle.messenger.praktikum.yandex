import { EventBus } from '@/shared/services';

export enum EBlockEvents {
  INIT = 'init',
  MOUNT = 'flow:component-did-mount',
  UPDATE = 'flow:component-did-update',
  RENDER = 'flow:render',
}

export type TBlockEventBus = EventBus<EBlockEvents>;

export type TEvents = {
  [key in keyof GlobalEventHandlersEventMap]?: (event: GlobalEventHandlersEventMap[key]) => void;
};
