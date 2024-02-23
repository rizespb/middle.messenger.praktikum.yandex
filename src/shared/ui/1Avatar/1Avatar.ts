import { classNames } from '@/shared/utils';
import { Block } from '@/shared/render';
import { IAvatarProps } from './1Avatar.interfaces';
import tmpl from './Avatar.hbs?raw';
import classes from './Avatar.module.scss';
import { sizesMap } from './1Avatar.constants';

export class Avatar extends Block<IAvatarProps> {
  render(): DocumentFragment {
    const { size, className = '' } = this.props;

    const avatarClassName = classNames({
      [classes.image]: true,
      [sizesMap[size]]: true,
      [className]: Boolean(className),
    });

    return this.compile(tmpl, { className: avatarClassName });
  }
}
