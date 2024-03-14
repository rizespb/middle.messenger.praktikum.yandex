import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';

export const deleteChatApi = (chatId: number): Promise<void> =>
  HTTPTransport.delete(servicesUrls.chats, {
    data: {
      chatId,
    },
  });
