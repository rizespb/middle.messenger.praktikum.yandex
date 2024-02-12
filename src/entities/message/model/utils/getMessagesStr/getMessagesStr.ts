import { EMessageType, IMessage } from '../../types';
import { TRenderMessage } from './getMessagesStr.interfaces';

export const getMessagesStr = (
  messages: IMessage[],
  textMessage: TRenderMessage,
  imageMessage: TRenderMessage
): THtml[] =>
  messages.reduce((acc, item) => {
    const { type } = item;

    let message: THtml;

    switch (type) {
      case EMessageType.Text:
        message = textMessage({ ...item });
        break;

      case EMessageType.Image:
        message = imageMessage({ ...item });
        break;

      default:
        break;
    }

    if (message !== undefined) {
      acc.push(message);
    }

    return acc;
  }, []);
