import { classNames } from '@/shared/utils';
import { Icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Block, IChildren } from '@/shared/render';
import { EMessageDirection, EMessageStatus, IRenderMessageProps } from '../../model';
import tmpl from './TextMessage.hbs?raw';
import classes from './TextMessage.module.scss';

export class TextMessage extends Block<IRenderMessageProps> {
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
    const { direction, status } = this.props;

    const containerClassName = classNames({
      [classes.textMessage]: true,
      [classes.textMessage__outcomig]: direction === EMessageDirection.Outcoming,
      [classes.textMessage__incoming]: direction === EMessageDirection.Incoming,
      [classes.textMessage__alignLeft]: direction === EMessageDirection.Incoming,
      [classes.textMessage__alignRight]: direction === EMessageDirection.Outcoming,
    });

    const isStatusVisible =
      direction === EMessageDirection.Outcoming && status === EMessageStatus.Read;

    const detailsClasses = classNames({
      [classes.details]: true,
      [classes.details__withStatus]: isStatusVisible,
    });

    return this.compile(tmpl, {
      classes,
      containerClassName,
      detailsClasses,
    });
  }
}
