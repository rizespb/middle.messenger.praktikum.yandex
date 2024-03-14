import { Avatar } from '@/shared/ui';
import { Block, IChildren, TEvents } from '@/shared/render';
import { router } from '@/entities/Router';
import { EPagesUrls } from '@/shared/constants';
import classes from './ChatPreview.module.scss';
import tmpl from './ChatPreview.hbs?raw';
import { IChatPreviewProps } from './ChatPreview.interfaces';

export class ChatPreview extends Block<IChatPreviewProps> {
  getInternalChildren(): IChildren {
    const { avatarSrc, avatarAlt } = this.props;

    return {
      image: new Avatar({
        avatarSrc,
        avatarAlt,
        size: 'medium',
      }),
    };
  }

  protected getInternalEvents(): TEvents {
    return {
      click: (): void => {
        router.go(`${EPagesUrls.ChatsPage}/${this.props.id}`);
      },
    };
  }

  render(): DocumentFragment {
    console.log(this.props.lastMessage);

    return this.compile(tmpl, {
      classes,
    });
  }
}
