import { compile } from '@/shared/utils';
import { addAttachment } from '@/features/addAttachment';
import { messageInput } from '@/features/messageInput';
import tmpl from './footer.hbs?raw';
import classes from './footer.module.scss';

export const footer = (): THtml => {
  const addAttachmentStr = addAttachment();

  const messageInputStr = messageInput();

  return compile(tmpl)({
    addAttachment: addAttachmentStr,
    messageInput: messageInputStr,
    classes,
  });
};
