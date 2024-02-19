import { Block } from '@/shared/render';
import { EPages } from '@/shared/constants';
import { Error500Page } from '@/pages/Error500Page';
import { Error404Page } from '@/pages/Error400Page';

export const getPage = (pageCode: EPages): Block => {
  switch (pageCode) {
    case EPages.Error404:
      return new Error404Page({});

    case EPages.Error500:
    default:
      return new Error500Page({});
  }
};
