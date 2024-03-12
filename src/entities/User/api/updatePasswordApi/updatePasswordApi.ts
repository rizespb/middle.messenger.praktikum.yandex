import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { IUpdatePasswordApiData } from './updatePasswordApi.interfaces';

export const updatePasswordApi = (passwordsData: IUpdatePasswordApiData): Promise<void> =>
  HTTPTransport.put(servicesUrls.password, { data: passwordsData });
