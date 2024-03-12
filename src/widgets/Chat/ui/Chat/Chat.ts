import { Block, IChildren } from '@/shared/render';
import { MessageGroup } from '@/entities/Message';
import tmpl from './Chat.hbs?raw';
import classes from './Chat.module.scss';
import { messagesGroupsMock } from './Chat.mocks';
import { IChatProps } from './Chat.interface';
import { TEXTS } from './Chat.constants';

export class Chat extends Block<IChatProps> {
  protected getInternalChildren(): IChildren {
    if (this.props.chatId === null) {
      return {};
    }

    const messagesGroups = messagesGroupsMock.map((group) => new MessageGroup(group));

    return { messagesGroups };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      noChatSelectedText: TEXTS.noChatSelectedText,
    });
  }
}
