import { classNames, compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import tmpl from './imageMessage.hbs?raw';
import classes from './imageMessage.module.scss';
import { EMessageDirection, EMessageStatus, IRenderMessageProps } from '../../model';

export const imageMessage = (props: IRenderMessageProps): THtml => {
  const { direction, content, time, status } = props;

  const containerClassName = classNames({
    [classes.imageMessage]: true,
    [classes.imageMessage__alignLeft]: direction === EMessageDirection.Incoming,
    [classes.imageMessage__alignRight]: direction === EMessageDirection.Outcoming,
  });

  const isStatusVisible =
    direction === EMessageDirection.Outcoming && status === EMessageStatus.Read;

  const statusIcon = icon({
    icon: EIcons.CheckMarkIcon,
    iconClass: classes.icon,
  });

  return compile(tmpl)({
    classes,
    containerClassName,
    imageSrc: content,
    time,
    statusIcon: isStatusVisible ? statusIcon : undefined,
  });
};
