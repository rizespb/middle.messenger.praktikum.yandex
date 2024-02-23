import { Block, IChildren } from '@/shared/render';
import { MessageGroup } from '@/entities/Message';
import tmpl from './Chat.hbs?raw';
import classes from './Chat.module.scss';
import { messagesGroupsMock } from './Chat.mocks';

export class Chat extends Block {
  protected getInternalChildren(): IChildren {
    const messagesGroups = messagesGroupsMock.map((group) => new MessageGroup(group));

    return { messagesGroups };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
