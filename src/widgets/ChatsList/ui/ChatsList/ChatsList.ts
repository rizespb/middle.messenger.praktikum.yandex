import { ChatPreview } from '@/entities/chat';
import { Block, IChildren } from '@/shared/render';
import { chatPreviewsMock } from './ChatsList.mocks';
import tmpl from './ChatsList.hbs?raw';
import classes from './ChatsList.module.scss';

export class ChatsList extends Block {
  protected getInternalChildren(): IChildren {
    const chats = chatPreviewsMock.map((preview) => new ChatPreview(preview));

    return {
      chats,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
