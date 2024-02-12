import { compile } from '@/shared/utils';
import { iconsMap } from './icon.constants';
import { IIconProps } from './icon.interfaces';
import tmpl from './icon.hbs?raw';
import classes from './icon.module.scss';

export const icon = (props: IIconProps): THtml => {
  const { icon: iconName, containerClass, iconClass } = props;

  const iconTmpl = iconsMap[iconName];
  const iconStr = compile(iconTmpl)({
    className: iconClass,
  });

  return compile(tmpl)({
    icon: iconStr,
    containerClass,
    classes,
  });
};
