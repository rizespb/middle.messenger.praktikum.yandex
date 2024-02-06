import { EPages } from '@/shared/constants';
import { logInPageTmpl } from '@/pages/logInPage';
import { signUpPageTmpl } from '@/pages/signUpPage';

export const getPage = (pageCode: EPages): string => {
  switch (pageCode) {
    case EPages.SignUpPage:
      return signUpPageTmpl;

    case EPages.LogInPage:
    default:
      return logInPageTmpl;
  }
};
