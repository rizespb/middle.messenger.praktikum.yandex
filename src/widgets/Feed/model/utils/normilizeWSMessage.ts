import { EMessageDirection, EMessageStatus, EMessageType, IMessage } from '@/entities/Message';
import { getDayOfMonth, getHoursAndMinutes, isValidDate } from '@/shared/utils';
import { IWSMessage } from '../types';

export const normilizeWSMessage = (wsMessage: IWSMessage, userId: number): IMessage | null => {
  const { id, time, type, user_id, content, is_read } = wsMessage;

  const date = new Date(time);

  if (!isValidDate(date) || type !== EMessageType.Text) {
    return null;
  }

  const dayOfMonth = getDayOfMonth(date);
  const hoursAndMinutes = getHoursAndMinutes(date);

  const direction = user_id === userId ? EMessageDirection.Outcoming : EMessageDirection.Incoming;

  const status =
    is_read === undefined || is_read === true ? EMessageStatus.Read : EMessageStatus.Delivered;

  const message = {
    date: dayOfMonth,
    id,
    type: EMessageType.Text,
    time: hoursAndMinutes,
    content,
    direction,
    status,
  };

  return message;
};
