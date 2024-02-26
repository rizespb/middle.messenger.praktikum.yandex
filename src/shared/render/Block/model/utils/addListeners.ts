import { TEvents } from '../types';

export const addListeners = (element: HTMLElement, events: TEvents): void => {
  (Object.keys(events) as Array<keyof GlobalEventHandlersEventMap>).forEach((eventName) => {
    element?.addEventListener(eventName, events[eventName]!);
  });
};
