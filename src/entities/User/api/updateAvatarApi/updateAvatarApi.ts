import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { IUpdateAvatarApiResponse } from './updateAvatarApi.interfaces';

export const updateAvatarApi = (avatar: FormData): Promise<IUpdateAvatarApiResponse> =>
  HTTPTransport.put<IUpdateAvatarApiResponse>(servicesUrls.avatar, { data: avatar });
