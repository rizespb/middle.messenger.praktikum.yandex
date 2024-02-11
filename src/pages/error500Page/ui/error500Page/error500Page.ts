import { centerContentLayout } from '@/layouts/centerContentLayout';
import { errorBlock } from '@/widgets/errorBlock';
import { TEXTS } from './error500Page.constants';

export const error500Page = (): THtml =>
  centerContentLayout({
    content: errorBlock({
      title: TEXTS.title,
      description: TEXTS.description,
    }),
  });
