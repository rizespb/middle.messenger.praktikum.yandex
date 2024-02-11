import { compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { centerContentLayout } from '@/layouts/centerContentLayout';
import tmpl from './profilePage.hbs?raw';
import classes from './profilePage.module.scss';

export const profilePage = (): THtml => {
  const goBackIcon = icon({
    icon: EIcons.ArrowIcon,
    iconClass: classes.icon,
  });

  const content = centerContentLayout({ content: 'Hello' });

  return compile(tmpl)({
    classes,
    icon: goBackIcon,
    content,
  });
};
