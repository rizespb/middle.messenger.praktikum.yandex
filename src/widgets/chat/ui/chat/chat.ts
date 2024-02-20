// import { compile } from '@/shared/utils';
// import { messageGroup } from '@/entities/message';
import { Block } from '@/shared/render';
// import tmpl from './Chat.hbs?raw';
import classes from './Chat.module.scss';
// import { messagesGroupsMock } from './Chat.mocks';

// export const chat = (): THtml => {
//   const messagesGroups = messagesGroupsMock.map((group) => messageGroup(group));

//   return compile(tmpl)({ classes, messagesGroups });
// };

export class Chat extends Block {
  render(): DocumentFragment {
    return this.compile('<div>Chat</div>', { classes });
  }
}
