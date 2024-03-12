import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { TFetchChatsListApiResponse } from './fetchChatsListApi.interfaces';

export const fetchChatsListApi = (): Promise<TFetchChatsListApiResponse> =>
  HTTPTransport.get(servicesUrls.chats);
