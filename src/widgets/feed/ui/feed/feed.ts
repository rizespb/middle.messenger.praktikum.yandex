import { compile } from '@/shared/utils';
import { header } from '../header';

import tmpl from './feed.hbs?raw';
import classes from './feed.module.scss';
import { footer } from '../footer';

export const feed = (): THtml => {
  const headerStr = header({ title: 'СуперДискотЭка' });
  const footerStr = footer();

  return compile(tmpl)({
    classes,
    header: headerStr,
    footer: footerStr,
  });
};
