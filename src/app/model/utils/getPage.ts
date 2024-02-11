import { EPages } from '@/shared/constants';
import { logInPage } from '@/pages/logInPage';
import { signUpPage } from '@/pages/signUpPage';
import { error404Page } from '@/pages/error404Page';
import { error500Page } from '@/pages/error500Page';
import { chatsPage } from '@/pages/chatsPage';
import { profilePage } from '@/pages/profilePage';

export const getPage = (pageCode: EPages): (() => THtml) => {
  switch (pageCode) {
    case EPages.SignUpPage:
      return signUpPage;

    case EPages.Error404:
      return error404Page;

    case EPages.Error500:
      return error500Page;

    case EPages.СhatsPage:
      return chatsPage;

    case EPages.ProfilePage:
      return profilePage;

    case EPages.LogInPage:
    default:
      return logInPage;
  }
};
