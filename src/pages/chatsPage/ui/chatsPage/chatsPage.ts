import { feed } from '@/widgets/feed/ui/feed/feed';
import { chatsList } from '@/widgets/chatsList';
import { compile } from '@/shared/utils';
import { chatsSearch } from '@/features/chatSearch';
import classes from './chatsPage.module.scss';
import tmpl from './chatsPage.hbs?raw';
import { linkData } from './chatsPage.constants';

export const chatsPage = (): THtml =>
  compile(tmpl)({
    chatsList,
    feed,
    classes,
    linkText: linkData.text,
    href: linkData.href,
    search: chatsSearch(),
  });
