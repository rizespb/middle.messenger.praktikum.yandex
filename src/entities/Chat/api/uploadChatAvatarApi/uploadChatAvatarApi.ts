import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { IUploadChatAvatarApiResponse } from './uploadChatAvatarApi.interfaces';

export const uploadChatAvatarApi = (formData: FormData): Promise<IUploadChatAvatarApiResponse> =>
  HTTPTransport.put<IUploadChatAvatarApiResponse>(servicesUrls.chatAvatar, { data: formData });
