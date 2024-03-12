import { TCallback } from './eventBus.interfaces';

export class EventBus<T extends string> {
  private listeners: Record<string, TCallback[]>;

  constructor() {
    this.listeners = {};
  }

  on(event: T, callback: TCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: T, callback: TCallback): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: T, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      return;
      // throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
