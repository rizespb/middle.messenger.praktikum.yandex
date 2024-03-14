import { HTTPTransport } from '@/shared/services';
import { servicesUrls } from '@/shared/constants';

export const logOutApi = (): Promise<void> => HTTPTransport.post(servicesUrls.logOut);
