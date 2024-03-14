import { Block, TEvents } from '@/shared/render';
import { ILinkProps } from './Link.interfaces';
import tmpl from './Link.hbs?raw';
import { router } from '../../model';

export class Link extends Block<ILinkProps> {
  protected getInternalEvents(): TEvents {
    return {
      click: (event: MouseEvent): void => {
        event.preventDefault();

        const href = (event.currentTarget as HTMLAnchorElement).getAttribute('href');

        if (href !== null) {
          router.go(href);
        }
      },
    };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, {
      ...this.props,
    });
  }
}
