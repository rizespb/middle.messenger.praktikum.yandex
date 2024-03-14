import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';

export const deleteUserApi = (userId: number, chatId: number): Promise<void> =>
  HTTPTransport.delete(servicesUrls.chatUsers, {
    data: {
      users: [userId],
      chatId,
    },
  });
