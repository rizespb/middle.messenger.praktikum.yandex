import { EPages } from '@/shared/constants';
import { logInPage } from '@/pages/logInPage';
import { signUpPage } from '@/pages/signUpPage';
import { error404Page } from '@/pages/error404Page';
import { error500Page } from '@/pages/error500Page';

export const getPage = (pageCode: EPages): (() => THtml) => {
  switch (pageCode) {
    case EPages.SignUpPage:
      return signUpPage;

    case EPages.Error404:
      return error404Page;

    case EPages.Error500:
      return error500Page;

    case EPages.LogInPage:
    default:
      return logInPage;
  }
};
