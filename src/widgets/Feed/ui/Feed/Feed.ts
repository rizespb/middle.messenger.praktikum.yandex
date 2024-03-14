import { Chat } from '@/widgets/Chat';
import { Block, IChildren } from '@/shared/render';
import { router } from '@/entities/Router';
import { ERouterEvents } from '@/shared/router';
import { connect } from '@/shared/HOC';
import { chatController } from '@/entities/Chat';
import { WSClient } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { IMessage } from '@/entities/Message';
import { Header } from '../Header';
import { Footer } from '../Footer';
import tmpl from './Feed.hbs?raw';
import classes from './Feed.module.scss';
import { TEXTS } from './Feed.constants';
import { ICurrentChatInfo, IFeedProps } from './Feed.interfaces';
import { IWSMessage, getChatId, normilizeWSMessage } from '../../model';

export class FeedClass extends Block<IFeedProps> {
  getCurrentChat(currentChatId: number | null): ICurrentChatInfo | null {
    const { chats } = this.props;

    if (!currentChatId || !chats) {
      return null;
    }

    const currentChatInfo = chats?.reduce<ICurrentChatInfo | null>(
      (acc, chat, currentChatIndex) => {
        if (chat.id === currentChatId) {
          // eslint-disable-next-line no-param-reassign
          acc = {
            currentChat: chat,
            currentChatIndex,
          };
        }

        return acc;
      },
      null
    );

    return currentChatInfo;
  }

  updateChatList(message: IMessage): void {
    const { chatId: currentChatId } = this.props;

    const { chats } = this.props;

    const currentChatInfo = this.getCurrentChat(currentChatId || null);

    if (!currentChatInfo || !chats) {
      return;
    }

    const { currentChat, currentChatIndex } = currentChatInfo;

    const last_message = {
      content: message?.content,
      id: message?.id,
      time: new Date().toISOString(),
    };

    const newChats = [
      ...chats.slice(0, currentChatIndex),
      { ...currentChat, last_message },
      ...chats.slice(currentChatIndex + 1),
    ];

    appStore.set('chats', [...newChats]);
  }

  resetUnreadMessageCounter(currentChatId: number | null | undefined): void {
    if (!currentChatId) {
      return;
    }

    const { chats } = this.props;

    const currentChatInfo = this.getCurrentChat(currentChatId);

    if (!currentChatInfo || !chats) {
      return;
    }

    const { currentChat, currentChatIndex } = currentChatInfo;

    const newChats = [
      ...chats.slice(0, currentChatIndex),
      { ...currentChat, unread_count: 0 },
      ...chats.slice(currentChatIndex + 1),
    ];

    appStore.set('chats', [...newChats]);
  }

  async initSocket(): Promise<void> {
    const { userId, chatId } = this.props;

    if (!chatId || userId === undefined) {
      return;
    }

    const token = await chatController.fetchToken(chatId);

    if (!token) {
      return;
    }

    const socketClient = new WSClient(userId, chatId, token);

    appStore.set('isLoading', true);

    socketClient.onOpen((): void => {
      socketClient.getOldMessages();
      this.resetUnreadMessageCounter(this.props.chatId);
      appStore.set('isLoading', false);
    });

    socketClient.onMessage<IWSMessage | IWSMessage[]>((data) => {
      if (Array.isArray(data)) {
        const messages = data.map((item) => normilizeWSMessage(item, userId)).filter(Boolean);

        appStore.set('chat.chatMessages', messages);
      } else {
        const message = normilizeWSMessage(data, userId);

        if (!message) {
          return;
        }

        appStore.set('chat.chatMessages', [message, ...this.props.chatMessages!]);

        this.updateChatList(message);
      }
    });

    appStore.set('chat.socketClient', socketClient);
  }

  resetChatState(currentChatId: number | null): void {
    appStore.set('chat', {
      currentChatId,
      socketClient: null,
      chatMessages: [],
    });
  }

  componentDidMount(): void {
    router.on(ERouterEvents.PopState, (): void => {
      this.props.socketClient?.close();

      const chatId = getChatId();

      this.resetChatState(chatId);

      if (chatId !== null) {
        this.initSocket();
      }
    });

    const chatId = getChatId();

    this.resetChatState(chatId);
    this.initSocket();
  }

  protected getInternalChildren(): IChildren {
    if (this.props.chatId === null) {
      return {};
    }

    const { chats, chatId } = this.props;

    const currentChat = chats?.find(({ id }) => id === chatId);

    const title = currentChat?.title || '';
    const imageSrc = `${servicesUrls.media}${currentChat?.avatar}`;

    const header = new Header({ title, imageSrc });
    const footer = new Footer({});

    const chat = new Chat({});

    return {
      header,
      chat,
      footer,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, {
      classes,
      noChatSelectedText: TEXTS.noChatSelectedText,
    });
  }
}

export const Feed = connect(FeedClass, (state) => ({
  userId: state.user?.id,
  chatId: state.chat.currentChatId,
  socketClient: state.chat.socketClient,
  chatMessages: state.chat.chatMessages,
  chats: state.chats,
}));
