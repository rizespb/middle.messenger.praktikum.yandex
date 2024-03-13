import { IChat } from '@/entities/Chat';
import { IMessage } from '@/entities/Message';
import { IUser } from '@/entities/User';
import { Block } from '@/shared/render';
import { WSClient } from '@/shared/services';
import { Store } from '@/shared/store';

declare global {
  module '*.scss' {
    const content: Record<string, string>;
    export default content;
  }

  module '*.svg';
  module '*.webp';
  module '*.gif';

  module '*.hbs?raw';

  type THtml = string;

  type TUuid = string;

  interface Window {
    appStore: Store;
  }

  interface IAppState {
    isLoading: boolean;
    snackBar: {
      isVisible: boolean;
      message: string;
      type: 'error' | 'success' | null;
    };
    initialPage: Block;
    user: IUser | null;
    chats: IChat[];
    profileMode: 'view' | 'updatePersonalDetails' | 'updatePassword';
    isUpdateAvatarFormVisible: boolean;
    isManageUserlistFormVisible: boolean;
    isAddChatFormVisible: boolean;
    chat: {
      currentChatId: number | null;
      chatMessages: IMessage[];
      socketClient: WSClient | null;
    };
  }

  const appStore: Store;
}

export {};
