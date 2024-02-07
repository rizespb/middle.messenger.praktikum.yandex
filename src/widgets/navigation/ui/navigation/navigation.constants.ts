import { EPages } from '@/shared/constants';
import { IPageMapItem } from './navigation.interfaces';

export const NAV_ITEM_ID_PREFIX = 'page-link-';
export const PAGE_CODE_ATTR = 'data-page-code';

export const pagesMap: IPageMapItem[] = [
  {
    code: EPages.LogInPage,
    title: 'LogIn',
  },
  {
    code: EPages.SignUpPage,
    title: 'SignUp',
  },
];
