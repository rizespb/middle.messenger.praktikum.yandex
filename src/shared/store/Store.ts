import { EventBus } from '@/shared/services';
import { setProperty } from '@/shared/utils';
import { EStoreEvents } from './Store.interfaces';

export class Store extends EventBus<EStoreEvents> {
  // eslint-disable-next-line no-use-before-define
  static instance: Store;

  private state: IAppState = {
    isLoading: true,
    isLoggedIn: false,
  };

  constructor() {
    if (Store.instance) {
      // eslint-disable-next-line no-constructor-return
      return Store.instance;
    }

    super();

    Store.instance = this;
  }

  public getState(): IAppState {
    return this.state;
  }

  public set(path: string, value: unknown): void {
    setProperty(this.state, path, value);

    this.emit(EStoreEvents.Updated);
  }
}
