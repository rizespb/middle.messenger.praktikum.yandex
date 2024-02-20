import { Block, IChildren } from '@/shared/render';
import tmpl from './MessageGroup.hbs?raw';
import { IMessageGroupProps } from './MessageGroup.interfaces';
import classes from './MessageGroup.module.scss';
import { getMessagesStr } from '../../model';
import { TextMessage } from '../TextMessage';
import { ImageMessage } from '../ImageMessage';

export class MessageGroup extends Block<IMessageGroupProps> {
  protected getInternalChildren(): IChildren<Block> {
    const { messages } = this.props;

    const messagesArray = getMessagesStr(messages, TextMessage, ImageMessage);

    return {
      messages: messagesArray,
    };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
