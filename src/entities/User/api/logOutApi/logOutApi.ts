import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { IFetchUserInfoApiResponse } from './logOutApi.interfaces';

export const logOutApi = (): Promise<IFetchUserInfoApiResponse> =>
  HTTPTransport.post(servicesUrls.logOut);
