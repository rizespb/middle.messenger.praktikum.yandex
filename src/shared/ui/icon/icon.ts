import { compile } from '@/shared/utils';
import { Block } from '@/shared/render';
import { iconsMap } from './Icon.constants';
import { IIconProps } from './Icon.interfaces';
import tmpl from './Icon.hbs?raw';
import classes from './Icon.module.scss';

export class Icon extends Block<IIconProps> {
  render(): DocumentFragment {
    const { icon: iconName, iconClass } = this.props;

    const iconTmpl = iconsMap[iconName];
    const iconStr = compile(iconTmpl)({
      className: iconClass,
    });

    return this.compile(tmpl, { classes, icon: iconStr });
  }
}
