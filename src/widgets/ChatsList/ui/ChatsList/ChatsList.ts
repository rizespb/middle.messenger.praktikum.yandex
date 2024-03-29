import { ChatPreview } from '@/entities/Chat';
import { Block, IChildren } from '@/shared/render';
import { connect } from '@/shared/HOC';
import { servicesUrls } from '@/shared/constants';
import tmpl from './ChatsList.hbs?raw';
import classes from './ChatsList.module.scss';
import { IChatsListProps } from './ChatsList.interfaces';
import { getPreviewDate } from '../../model';

export class ChatsListClass extends Block<IChatsListProps> {
  protected getInternalChildren(): IChildren {
    const chats =
      this.props.chats?.map((chat) => {
        const { id, title, avatar, unread_count, last_message } = chat;

        const date = last_message?.time ? getPreviewDate(last_message.time) : null;

        return new ChatPreview({
          title,
          lastMessage: last_message?.content || '',
          newMessagesCount: unread_count,
          avatarSrc: `${servicesUrls.media}${avatar}`,
          avatarAlt: title,
          date,
          id,
        });
      }) || [];

    return {
      chats,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, { classes });
  }
}

export const ChatsList = connect(ChatsListClass, (state) => ({
  chats: state.chats,
}));
