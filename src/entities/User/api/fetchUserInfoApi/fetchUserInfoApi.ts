import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { IFetchUserInfoApiResponse } from './fetchUserInfoApi.interfaces';

export const fetchUserInfoApi = (): Promise<IFetchUserInfoApiResponse> =>
  HTTPTransport.get(servicesUrls.userInfo);
