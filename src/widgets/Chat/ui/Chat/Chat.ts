import { Block, IChildren } from '@/shared/render';
import { MessageGroup } from '@/entities/Message';
import { connect } from '@/shared/HOC';
import tmpl from './Chat.hbs?raw';
import classes from './Chat.module.scss';
import { IChatProps } from './Chat.interface';
import { getMessagesGroups } from '../../model';

export class ChatClass extends Block<IChatProps> {
  protected getInternalChildren(): IChildren {
    const { chatMessages } = this.props;

    if (!chatMessages) {
      return {};
    }
    const messagesGroups = getMessagesGroups(chatMessages).map((group) => new MessageGroup(group));

    return { messagesGroups };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, {
      classes,
    });
  }
}

export const Chat = connect(ChatClass, (state) => ({
  chatMessages: state.chat.chatMessages,
}));
