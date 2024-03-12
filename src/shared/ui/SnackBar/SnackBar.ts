import { Block } from '@/shared/render';
import { connect } from '@/shared/HOC';
import tmpl from './SnackBar.hbs?raw';
import classes from './SnackBar.module.scss';
import { ISnackBarProps } from './SnackBar.interfaces';

export class SnackBarClass extends Block<ISnackBarProps> {
  protected render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}

export const SnackBar = connect(SnackBarClass, (state) => {
  const { message, isVisible } = state.snackBar;

  return {
    message,
    isVisible: message && isVisible,
  };
});
