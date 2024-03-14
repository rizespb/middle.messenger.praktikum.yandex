import { EIcons } from '@/shared/types';
import { Block, IChildren, TEvents } from '@/shared/render';
import { Icon } from '@/shared/ui';
import { Input } from '@/shared/ui/Input';
import { covertFormEntries, getFormDataEntries } from '@/shared/utils';
import { validateForm } from '@/shared/services';
import { connect } from '@/shared/HOC';
import tmpl from './MessageInput.hbs?raw';
import classes from './MessageInput.module.scss';
import { inputData } from './MessageInput.constants';
import { IMessageInputProps } from './MessageInput.interface';

export class MessageInputClass extends Block<IMessageInputProps> {
  protected getInternalChildren(): IChildren {
    const sendButton = new Icon({
      icon: EIcons.ArrowIcon,
      iconClass: classes.icon,
    });

    const input = new Input({
      name: inputData.name,
      placeholder: inputData.placeholder,
      className: classes.input,
    });

    return {
      sendButton,
      input,
    };
  }

  protected getInternalEvents(): TEvents {
    return {
      submit: (event): void => {
        event.preventDefault();
        if (!event) {
          return;
        }
        const entries = getFormDataEntries(event);

        const validationResults = validateForm(entries);

        const isValidationPassed = !validationResults[0].isError;

        if (isValidationPassed) {
          const data = covertFormEntries(entries);

          this.props.socketClient?.sendMessage(data.message);

          (this.children.input as Block).setProps({ value: '' });
        }
      },
    };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      name: inputData.name,
      placeholder: inputData.placeholder,
    });
  }
}

export const MessageInput = connect(MessageInputClass, (state) => ({
  socketClient: state.chat.socketClient,
}));
