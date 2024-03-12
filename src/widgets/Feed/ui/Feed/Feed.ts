import { Chat } from '@/widgets/Chat';
import { Block, IChildren } from '@/shared/render';
import { Header } from '../Header';
import { Footer } from '../Footer';
import tmpl from './Feed.hbs?raw';
import classes from './Feed.module.scss';

export class Feed extends Block {
  getChatId(): number | null {
    const { pathname } = window.location;

    const chatIdStr = pathname.split('/')[2];

    const chatId = Number(chatIdStr);

    return chatId || null;
  }

  protected getInternalChildren(): IChildren {
    const header = new Header({ title: 'СуперДискотЭка' });
    const footer = new Footer({});

    const chatId = this.getChatId();

    const chat = new Chat({ chatId });

    return {
      header,
      chat,
      footer,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
