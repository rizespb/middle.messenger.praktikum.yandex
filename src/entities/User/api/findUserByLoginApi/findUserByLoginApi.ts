import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { TFindUserByLoginApiResponse } from './findUserByLoginApi.interfaces';

export const findUsersByLoginApi = (login: string): Promise<TFindUserByLoginApiResponse> =>
  HTTPTransport.post(servicesUrls.searchUser, {
    data: {
      login,
    },
  });
