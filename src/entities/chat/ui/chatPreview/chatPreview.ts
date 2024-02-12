import { avatar } from '@/shared/ui';
import { compile } from '@/shared/utils';
import classes from './chatPreview.module.scss';
import tmpl from './chatPreview.hbs?raw';
import { IChatPreviewProps } from './chatPreview.interfaces';

export const chatPreview = (props: IChatPreviewProps): THtml => {
  const { avatarSrc, avatarAlt, ...rest } = props;

  const image = avatar({ avatarSrc, avatarAlt, size: 'medium' });

  return compile(tmpl)({
    ...rest,
    image,
    classes,
  });
};
