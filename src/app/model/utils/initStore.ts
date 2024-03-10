import { InitialPage } from '@/pages/InitialPage';
import { Store } from '@/shared/store';

const initialState: IAppState = {
  isLoading: false,
  snackBar: {
    message: '',
    isVisible: false,
  },
  user: null,
  initialPage: new InitialPage({}),
};

export const initStore = (): void => {
  const store = new Store(initialState);

  window.appStore = store;
};
