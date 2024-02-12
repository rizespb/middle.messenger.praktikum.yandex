import { centerContentLayout } from '@/layouts/centerContentLayout';
import { errorBlock } from '@/widgets/errorBlock';
import { TEXTS } from './error404Page.constants';

export const error404Page = (): THtml =>
  centerContentLayout({
    content: errorBlock({
      title: TEXTS.title,
      description: TEXTS.description,
    }),
  });
