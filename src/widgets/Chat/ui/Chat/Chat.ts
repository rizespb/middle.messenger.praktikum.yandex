import { Block, IChildren } from '@/shared/render';
import { MessageGroup } from '@/entities/Message';
import tmpl from './Chat.hbs?raw';
import classes from './Chat.module.scss';
import { IChatProps } from './Chat.interface';

export class Chat extends Block<IChatProps> {
  protected getInternalChildren(): IChildren {
    const messagesGroups = this.props.messagesGroups.map((group) => new MessageGroup(group));

    return { messagesGroups };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
    });
  }
}
