import { Block } from '@/shared/render';
import { EMessageType, IMessage } from '../../types';
import { TMessageBlock } from './getMessagesStr.interfaces';

export const getMessagesStr = (
  messages: IMessage[],
  TextMessage: TMessageBlock,
  TmageMessage: TMessageBlock
): Block[] =>
  messages.reduce<Block[]>((acc, item) => {
    const { type } = item;

    let message: Block | null = null;

    switch (type) {
      case EMessageType.Text:
        message = new TextMessage({ ...item });
        break;

      case EMessageType.Image:
        message = new TmageMessage({ ...item });
        break;

      default:
        break;
    }

    if (message !== null) {
      acc.push(message);
    }

    return acc;
  }, []);
