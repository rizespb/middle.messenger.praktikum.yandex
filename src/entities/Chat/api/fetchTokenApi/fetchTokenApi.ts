import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { IFetchTokenApiResponse } from './fetchTokenApi.interfaces';

export const fetchTokenApi = (chatId: number): Promise<IFetchTokenApiResponse> =>
  HTTPTransport.post(`${servicesUrls.chatToken}/${chatId}`);
