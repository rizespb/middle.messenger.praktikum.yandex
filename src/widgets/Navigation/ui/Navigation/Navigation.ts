import { Block, IChildren } from '@/shared/render';
import { Link } from '@/entities/Router';
import classes from './Navigation.module.scss';
import tmpl from './Navigation.hbs?raw';
import { INavigationProps } from './Navigation.interfaces';

// Временная реализация навигации
export class Navigation extends Block<INavigationProps> {
  protected getInternalChildren(): IChildren {
    const links = this.props.links.map(
      ({ text, href }) =>
        new Link({
          text,
          href,
        })
    );

    return {
      links,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
    });
  }
}
