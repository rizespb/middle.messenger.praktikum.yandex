import { compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { profile } from '@/widgets/profile';
import tmpl from './profilePage.hbs?raw';
import classes from './profilePage.module.scss';

export const profilePage = (): THtml => {
  const goBackIcon = icon({
    icon: EIcons.ArrowIcon,
    iconClass: classes.icon,
  });

  const content = profile();

  return compile(tmpl)({
    classes,
    icon: goBackIcon,
    content,
  });
};
