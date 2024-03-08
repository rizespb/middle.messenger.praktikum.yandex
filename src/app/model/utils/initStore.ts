import { Store } from '@/shared/store';

export const initStore = (): void => {
  const store = new Store();

  window.appStore = store;
};
