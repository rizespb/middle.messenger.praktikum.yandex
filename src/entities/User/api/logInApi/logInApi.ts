import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { ILogInApiResponse, ILogInData } from './logInApi.interfaces';

export const logInApi = (logInData: ILogInData): Promise<ILogInApiResponse> =>
  HTTPTransport.post<ILogInApiResponse>(servicesUrls.logIn, { data: logInData });
