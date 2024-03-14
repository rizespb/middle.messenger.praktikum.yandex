import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { TUpdateProfileApiResponse, IUpdateProfileData } from './updateProfileApi.interfaces';

export const updateProfileApi = (
  userData: IUpdateProfileData
): Promise<TUpdateProfileApiResponse> =>
  HTTPTransport.put<TUpdateProfileApiResponse>(servicesUrls.userProfile, { data: userData });
