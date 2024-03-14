import { ChatsPage } from '@/pages/ChatsPage';
import { Error404Page } from '@/pages/Error404Page';
import { Error500Page } from '@/pages/Error500Page';
import { LogInPage } from '@/pages/LogInPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignUpPage } from '@/pages/SignUpPage';
import { EPagesUrls } from '@/shared/constants';
import { IRouteData } from '../types';

export const routes: IRouteData[] = [
  {
    pathname: EPagesUrls.SignUpPage,
    block: SignUpPage,
    title: 'SignUp',
    isProtected: false,
  },
  {
    pathname: EPagesUrls.ProfilePage,
    block: ProfilePage,
    title: 'Profile',
    isProtected: true,
  },
  {
    pathname: EPagesUrls.ChatsPage,
    block: ChatsPage,
    title: 'Chats',
    isProtected: true,
  },
  {
    pathname: EPagesUrls.Error404,
    block: Error404Page,
    title: '404',
    isProtected: false,
  },
  {
    pathname: EPagesUrls.Error500,
    block: Error500Page,
    title: '500',
    isProtected: false,
  },
  {
    pathname: EPagesUrls.LogInPage,
    block: LogInPage,
    title: 'LogIn',
    isProtected: false,
  },
];
