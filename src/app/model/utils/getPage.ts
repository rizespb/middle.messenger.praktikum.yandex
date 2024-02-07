import { EPages } from '@/shared/constants';
import { logInPageTmpl } from '@/pages/logInPage';
import { signUpPageTmpl } from '@/pages/signUpPage';
import { error404PageTmpl } from '@/pages/error404Page';
import { error500PageTmpl } from '@/pages/error500Page';

export const getPage = (pageCode: EPages): string => {
  switch (pageCode) {
    case EPages.SignUpPage:
      return signUpPageTmpl;

    case EPages.Error404:
      return error404PageTmpl;

    case EPages.Error500:
      return error500PageTmpl;

    case EPages.LogInPage:
    default:
      return logInPageTmpl;
  }
};
