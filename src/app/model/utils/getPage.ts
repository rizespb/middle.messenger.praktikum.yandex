import { Block } from '@/shared/render';
import { EPages } from '@/shared/constants';
import { Error500Page } from '@/pages/Error500Page';
import { Error404Page } from '@/pages/Error400Page';
import { LogInPage } from '@/pages/LogInPage';
import { SignUpPage } from '@/pages/SignUpPage';
import { ChatsPage } from '@/pages/ChatsPage';
import { ProfilePage } from '@/pages/ProfilePage';

export const getPage = (pageCode: EPages): Block => {
  switch (pageCode) {
    case EPages.LogInPage:
      return new LogInPage({});

    case EPages.SignUpPage:
      return new SignUpPage({});

    case EPages.ChatsPage:
      return new ChatsPage({});

    case EPages.ProfilePage:
      return new ProfilePage({});

    case EPages.Error500:
      return new Error500Page({});

    case EPages.Error404:
    default:
      return new Error404Page({});
  }
};
