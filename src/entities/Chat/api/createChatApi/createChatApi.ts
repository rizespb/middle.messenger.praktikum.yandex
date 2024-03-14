import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { ICreateChatApiResponse } from './createChatApi.interfaces';

export const createChatApi = (title: string): Promise<ICreateChatApiResponse> =>
  HTTPTransport.post(servicesUrls.chats, {
    data: {
      title,
    },
  });
