import { Chat } from '@/widgets/Chat';
import { Block, IChildren } from '@/shared/render';
import { router } from '@/entities/Router';
import { ERouterEvents } from '@/shared/router';
import { connect } from '@/shared/HOC';
import { chatController } from '@/entities/Chat';
import { WSClient } from '@/shared/services';
import { Header } from '../Header';
import { Footer } from '../Footer';
import tmpl from './Feed.hbs?raw';
import classes from './Feed.module.scss';
import { TEXTS } from './Feed.constants';
import { messagesGroupsMock } from './Feed.mocks';
import { IFeedProps, IWSMessage } from './Feed.interfaces';
import { getChatId } from '../../model';

export class FeedClass extends Block<IFeedProps> {
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

    socketClient.onOpen((): void => {
      socketClient.getOldMessages();
    });

    socketClient.onMessage<string>((data) =>
      console.log('From onMessage', JSON.parse(data) as IWSMessage | IWSMessage[])
    );

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
      const chatId = getChatId();

      this.resetChatState(chatId);

      if (chatId !== null) {
        this.initSocket();
      }
    });

    this.initSocket();
  }

  protected getInternalChildren(): IChildren {
    const header = new Header({ title: 'СуперДискотЭка' });
    const footer = new Footer({
      socketClient: this.props.socketClient || null,
    });

    const chat = new Chat({ messagesGroups: messagesGroupsMock });

    return {
      header,
      chat,
      footer,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      noChatSelectedText: TEXTS.noChatSelectedText,
    });
  }
}

export const Feed = connect(FeedClass, (state) => ({
  chatId: state.chat.currentChatId,
  userId: state.user?.id,
  socketClient: state.chat.socketClient,
}));
