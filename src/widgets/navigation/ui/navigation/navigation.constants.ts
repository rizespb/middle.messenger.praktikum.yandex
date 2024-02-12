import { EPages } from '@/shared/constants';
import { IPageMapItem } from './navigation.interfaces';

export const PAGE_CODE_ATTR_TITLE = 'data-page-code';

export const pagesMap: IPageMapItem[] = [
  {
    code: EPages.LogInPage,
    title: 'LogIn',
  },
  {
    code: EPages.SignUpPage,
    title: 'SignUp',
  },
  {
    code: EPages.Error404,
    title: '404',
  },
  {
    code: EPages.СhatsPage,
    title: 'Chats',
  },
  {
    code: EPages.Error500,
    title: '500',
  },
  {
    code: EPages.ProfilePage,
    title: 'Profile',
  },
];
