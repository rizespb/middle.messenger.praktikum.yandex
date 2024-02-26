import { TEvents } from '../types';

export const removeListeners = (element: HTMLElement, events: TEvents): void => {
  (Object.keys(events) as Array<keyof GlobalEventHandlersEventMap>).forEach((eventName) => {
    element?.removeEventListener(eventName, events[eventName]!);
  });
};
