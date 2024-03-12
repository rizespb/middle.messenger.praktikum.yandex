import { ChatsList } from '@/widgets/ChatsList';
import { ChatSearch } from '@/features/ChatSearch';
import { Block, IChildren } from '@/shared/render';
import { Feed } from '@/widgets/Feed';
import { Link } from '@/entities/Router';
import { Button } from '@/shared/ui';
import { userController } from '@/entities/User';
import classes from './ChatsPage.module.scss';
import tmpl from './ChatsPage.hbs?raw';
import { TEXTS, linkData } from './ChatsPage.constants';

export class ChatsPage extends Block {
  getInternalChildren(): IChildren {
    const chatsList = new ChatsList({});
    const search = new ChatSearch({});

    const feed = new Feed({});

    const profileLink = new Link({
      text: linkData.text,
      href: linkData.href,
      classname: classes.link,
    });

    const logOutButton = new Button({
      title: TEXTS.logOutButton,
      type: 'button',
      kind: 'tertiary',
      events: {
        click: (): void => {
          userController.logOut();
        },
      },
    });

    return {
      chatsList,
      search,
      feed,
      profileLink,
      logOutButton,
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
