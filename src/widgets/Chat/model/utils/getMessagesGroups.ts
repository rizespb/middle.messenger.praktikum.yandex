import { IMessagesGroup, IMessage } from '@/entities/Message';

export const getMessagesGroups = (messages: IMessage[]): IMessagesGroup[] => {
  const groups = messages.reduce<IMessagesGroup[]>((acc, message) => {
    const { date } = message;
    if (acc.length === 0) {
      acc.push({
        date,
        messages: [message],
      });

      return acc;
    }

    const lastGroup = acc[acc.length - 1];

    if (lastGroup.date === date) {
      lastGroup.messages.unshift(message);
    } else {
      acc.push({
        date,
        messages: [message],
      });
    }

    return acc;
  }, []);

  return groups;
};
