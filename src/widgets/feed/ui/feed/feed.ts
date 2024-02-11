import { compile } from '@/shared/utils';
import { chat } from '@/widgets/chat';
import { header } from '../header';
import { footer } from '../footer';
import tmpl from './feed.hbs?raw';
import classes from './feed.module.scss';

export const feed = (): THtml => {
  const headerStr = header({ title: 'СуперДискотЭка' });
  const footerStr = footer();
  const chatStr = chat();

  return compile(tmpl)({
    classes,
    header: headerStr,
    chat: chatStr,
    footer: footerStr,
  });
};
