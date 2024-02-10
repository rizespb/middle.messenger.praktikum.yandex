import { compile } from '@/shared/utils';
import { header } from '../header';

import tmpl from './feed.hbs?raw';
import classes from './feed.module.scss';

export const feed = (): THtml => {
  const headerStr = header({ title: 'СуперДискотЭка' });

  return compile(tmpl)({
    classes,
    header: headerStr,
  });
};
