import { EIcons } from '@/shared/types';
import { Block, IBlockProps, IChildren } from '@/shared/render';
import { Icon } from '@/shared/ui';
import tmpl from './MessageInput.hbs?raw';
import classes from './MessageInput.module.scss';
import { inputData } from './MessageInput.constants';

export class MessageInput extends Block {
  protected getInternalChildren(): IChildren<Block<IBlockProps>> {
    const sendButton = new Icon({
      icon: EIcons.ArrowIcon,
      iconClass: classes.icon,
    });
    return { sendButton };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      name: inputData.name,
      placeholder: inputData.placeholder,
    });
  }
}
