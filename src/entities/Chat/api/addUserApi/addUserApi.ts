import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';

export const addUserApi = (userId: number, chatId: number): Promise<void> =>
  HTTPTransport.put(servicesUrls.chatUsers, {
    data: {
      users: [userId],
      chatId,
    },
  });
