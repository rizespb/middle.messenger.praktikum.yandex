import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';
import { ICreateUserApiResponse, IUserData } from './createUserApi.interfaces';

export const createUserApi = (userData: IUserData): Promise<ICreateUserApiResponse> =>
  HTTPTransport.post<ICreateUserApiResponse>(servicesUrls.signUp, { data: userData });
