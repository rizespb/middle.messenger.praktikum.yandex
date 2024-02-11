import { classNames, compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { EMessageDirection, EMessageStatus, IRenderMessageProps } from '../../model';
import tmpl from './textMessage.hbs?raw';
import classes from './textMessage.module.scss';

export const textMessage = (props: IRenderMessageProps): THtml => {
  const { direction, content, time, status } = props;

  const isStatusVisible =
    direction === EMessageDirection.Outcoming && status === EMessageStatus.Read;

  const containerClassName = classNames({
    [classes.textMessage]: true,
    [classes.textMessage__outcomig]: direction === EMessageDirection.Outcoming,
    [classes.textMessage__incoming]: direction === EMessageDirection.Incoming,
    [classes.textMessage__alignLeft]: direction === EMessageDirection.Incoming,
    [classes.textMessage__alignRight]: direction === EMessageDirection.Outcoming,
  });

  const detailsClasses = classNames({
    [classes.details]: true,
    [classes.details__withStatus]: isStatusVisible,
  });

  const statusIcon = icon({
    icon: EIcons.CheckMarkIcon,
    iconClass: classes.icon,
  });

  return compile(tmpl)({
    classes,
    containerClassName,
    detailsClasses,
    content,
    time,
    statusIcon: isStatusVisible ? statusIcon : undefined,
  });
};
