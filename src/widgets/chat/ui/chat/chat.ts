import { compile } from '@/shared/utils';
import { messageGroup } from '@/entities/message';
import tmpl from './chat.hbs?raw';
import classes from './chat.module.scss';
import { messagesGroupsMock } from './chat.mocks';

export const chat = (): THtml => {
  const messagesGroups = messagesGroupsMock.map((group) => messageGroup(group));

  return compile(tmpl)({ classes, messagesGroups });
};
