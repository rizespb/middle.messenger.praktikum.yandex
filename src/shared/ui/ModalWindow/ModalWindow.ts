import { classNames } from '@/shared/utils';
import { Block, TEvents } from '@/shared/render';
import tmpl from './ModalWindow.hbs?raw';
import { IModalWindowProps } from './ModalWindow.interface';
import classes from './ModalWindow.module.scss';

export class ModalWindow extends Block<IModalWindowProps> {
  protected getInternalEvents(): TEvents {
    return {
      click: (event): void => {
        if (!event.target || !(event.target instanceof HTMLElement)) {
          return;
        }

        const modalContent = document.getElementById(this.props.contentContainerId);

        if (!modalContent?.contains(event.target) && this.props.isModalOpened) {
          this.props.onClose();
        }
      },
    };
  }

  render(): DocumentFragment {
    const headingClasses = classNames({
      [classes.heading]: true,
      [classes.heading__error]: this.props.titleColor === 'error',
    });

    return this.compile(tmpl, { classes, headingClasses });
  }
}
