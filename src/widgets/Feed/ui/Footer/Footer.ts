import { AddAttachment } from '@/features/AddAttachment';
import { Block, IChildren } from '@/shared/render';
import { MessageInput } from '@/features/MessageInput';
import tmpl from './Footer.hbs?raw';
import classes from './Footer.module.scss';
import { IFooterProps } from './Footer.interfaces';

export class Footer extends Block<IFooterProps> {
  protected getInternalChildren(): IChildren {
    const addAttachment = new AddAttachment({});

    const messageInput = new MessageInput({
      onSubmit: this.props.socketClient?.sendMessage.bind(this.props.socketClient),
    });

    return {
      addAttachment,
      messageInput,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, { classes });
  }
}
