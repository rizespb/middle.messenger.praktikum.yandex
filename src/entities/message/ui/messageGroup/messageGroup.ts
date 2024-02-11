import { compile } from '@/shared/utils';
import tmpl from './messageGroup.hbs?raw';
import { IMessageGroupProps } from './messageGroup.interfaces';
import classes from './messageGroup.module.scss';
import { getMessagesStr } from '../../model';
import { textMessage } from '../textMessage';
import { imageMessage } from '../imageMessage';

export const messageGroup = (props: IMessageGroupProps): THtml => {
  const { date, messages } = props;

  const messagesArray = getMessagesStr(messages, textMessage, imageMessage);

  return compile(tmpl)({
    classes,
    date,
    messages: messagesArray,
  });
};
