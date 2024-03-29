import { InitialPage } from '@/pages/InitialPage';
import { Store } from '@/shared/store';

const initialState: IAppState = {
  isLoading: false,
  snackBar: {
    message: '',
    isVisible: false,
    type: null,
  },
  user: null,
  initialPage: new InitialPage({}),
  chats: [],
  profileMode: 'view',
  isUpdateAvatarFormVisible: false,
  isManageUserlistFormVisible: false,
  isAddChatFormVisible: false,
  isDeleteChatFormVisible: false,
  chat: {
    chatMessages: [],
    socketClient: null,
    currentChatId: null,
  },
};

export const initStore = (): void => {
  const store = new Store(initialState);

  window.appStore = store;
};
