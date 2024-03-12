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
  chats: null,
  profileMode: 'view',
  isUpdateAvatarFormVisible: false,
};

export const initStore = (): void => {
  const store = new Store(initialState);

  window.appStore = store;
};
