import { Store } from '@/shared/store';

const initialState: IAppState = {
  isLoading: false,
  isLoggedIn: false,
  snackBar: {
    message: '',
    isVisible: false,
  },
};

export const initStore = (): void => {
  const store = new Store(initialState);

  window.appStore = store;
};
