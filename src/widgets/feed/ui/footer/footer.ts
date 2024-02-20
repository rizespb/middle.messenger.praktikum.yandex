// import { compile } from '@/shared/utils';
// import { addAttachment } from '@/features/AddAttachment';
// import { messageInput } from '@/features/messageInput';
import { Block } from '@/shared/render';
// import tmpl from './Footer.hbs?raw';
import classes from './Footer.module.scss';

// export const footer = (): THtml => {
//   const addAttachmentStr = addAttachment();

//   const messageInputStr = messageInput();

//   return compile(tmpl)({
//     addAttachment: addAttachmentStr,
//     messageInput: messageInputStr,
//     classes,
//   });
// };

export class Footer extends Block {
  render(): DocumentFragment {
    return this.compile('<div>Footer</div>', { classes });
  }
}
