import { Block } from '@/shared/render';
import { EPages } from '@/shared/constants';
import { Error500Page } from '@/pages/Error500Page';
import { Error404Page } from '@/pages/Error400Page';
import { LogInPage } from '@/pages/LogInPage';
import { SignUpPage } from '@/pages/SignUpPage';
import { ChatsPage } from '@/pages/ChatsPage';

export const getPage = (pageCode: EPages): Block => {
  switch (pageCode) {
    case EPages.LogInPage:
      return new LogInPage({});

    case EPages.SignUpPage:
      return new SignUpPage({});

    case EPages.СhatsPage:
      return new ChatsPage({});

    case EPages.Error404:
      return new Error404Page({});

    case EPages.Error500:
    default:
      return new Error500Page({});
  }
};
