import { ChatsPage } from '@/pages/ChatsPage';
import { Error404Page } from '@/pages/Error404Page';
import { Error500Page } from '@/pages/Error500Page';
import { LogInPage } from '@/pages/LogInPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignUpPage } from '@/pages/SignUpPage';
import { IRouteData } from '../types';

export const routes: IRouteData[] = [
  {
    pathname: '/',
    block: LogInPage,
    title: 'LogIn',
    isProtected: false,
  },
  {
    pathname: '/sign-up',
    block: SignUpPage,
    title: 'SignUp',
    isProtected: false,
  },
  {
    pathname: '/settings',
    block: ProfilePage,
    title: 'Profile',
    isProtected: true,
  },
  {
    pathname: '/messenger',
    block: ChatsPage,
    title: 'Chats',
    isProtected: true,
  },
  {
    pathname: '/404',
    block: Error404Page,
    title: '404',
    isProtected: false,
  },
  {
    pathname: '/500',
    block: Error500Page,
    title: '500',
    isProtected: false,
  },
];
