// import { feed } from '@/widgets/feed/ui/feed/feed';
import { ChatsList } from '@/widgets/ChatsList';
import { ChatSearch } from '@/features/ChatSearch';
import { Block, IChildren } from '@/shared/render';
import { Feed } from '@/widgets/Feed';
import classes from './ChatsPage.module.scss';
import tmpl from './ChatsPage.hbs?raw';
import { linkData } from './ChatsPage.constants';

export class ChatsPage extends Block {
  getInternalChildren(): IChildren<Block> {
    const chatsList = new ChatsList({});
    const search = new ChatSearch({});
    const feed = new Feed({});

    return {
      chatsList,
      search,
      feed,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      linkText: linkData.text,
      href: linkData.href,
    });
  }
}
