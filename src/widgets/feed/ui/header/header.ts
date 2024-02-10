import { avatar } from '@/shared/ui';
import { compile } from '@/shared/utils';
import { showActionsButton } from '@/features/showActionsButton';
import tmpl from './header.hbs?raw';
import { IHeaderProps } from './header.interfaces';
import classes from './header.module.scss';

export const header = (props: IHeaderProps): THtml => {
  const { title, imageSrc } = props;

  const image = avatar({
    size: 'small',
    avatarAlt: title,
    avatarSrc: imageSrc,
  });

  return compile(tmpl)({
    title,
    image,
    showActionsButton: showActionsButton(),
    classes,
  });
};
