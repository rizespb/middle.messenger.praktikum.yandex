// import { AddAttachment } from '@/features/AddAttachment';
import { Block, IChildren } from '@/shared/render';
import { MessageInput } from '@/features/MessageInput';
import tmpl from './Footer.hbs?raw';
import classes from './Footer.module.scss';

export class Footer extends Block {
  protected getInternalChildren(): IChildren {
    // const addAttachment = new AddAttachment({});

    const messageInput = new MessageInput({});

    return {
      // addAttachment,
      messageInput,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, { classes });
  }
}
