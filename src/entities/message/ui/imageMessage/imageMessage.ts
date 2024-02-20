import { classNames } from '@/shared/utils';
import { Icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Block, IChildren } from '@/shared/render';
import tmpl from './ImageMessage.hbs?raw';
import classes from './ImageMessage.module.scss';
import {
  EMessageDirection,
  EMessageStatus,
  IRenderMessageProps,
  getFileNameFromUrl,
} from '../../model';

export class ImageMessage extends Block<IRenderMessageProps> {
  protected getInternalChildren(): IChildren<Block> {
    const { direction, status } = this.props;

    const isStatusVisible =
      direction === EMessageDirection.Outcoming && status === EMessageStatus.Read;

    if (!isStatusVisible) {
      return {};
    }

    const statusIcon = new Icon({
      icon: EIcons.CheckMarkIcon,
      iconClass: classes.icon,
    });

    return {
      statusIcon,
    };
  }

  protected render(): DocumentFragment {
    const { direction, content } = this.props;

    const containerClassName = classNames({
      [classes.imageMessage]: true,
      [classes.imageMessage__alignLeft]: direction === EMessageDirection.Incoming,
      [classes.imageMessage__alignRight]: direction === EMessageDirection.Outcoming,
    });

    const imageAlt = getFileNameFromUrl(content) || '';

    return this.compile(tmpl, {
      classes,
      containerClassName,
      imageSrc: content,
      imageAlt,
    });
  }
}
