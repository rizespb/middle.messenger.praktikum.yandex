import { Avatar } from '@/shared/ui';
import { Block, IChildren } from '@/shared/render';
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

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
    });
  }
}
