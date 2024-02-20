import { AddAttachment } from '@/features/AddAttachment';
import { Block, IChildren } from '@/shared/render';
import tmpl from './Footer.hbs?raw';
import classes from './Footer.module.scss';

export class Footer extends Block {
  protected getInternalChildren(): IChildren<Block> {
    const addAttachment = new AddAttachment({});

    //   const messageInputStr = messageInput();

    return {
      addAttachment,
      // messageInput,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
