import { Block } from '@/shared/render';
import { connect } from '@/shared/HOC';
import { classNames } from '@/shared/utils';
import tmpl from './SnackBar.hbs?raw';
import classes from './SnackBar.module.scss';
import { ISnackBarProps } from './SnackBar.interfaces';

export class SnackBarClass extends Block<ISnackBarProps> {
  protected render(): DocumentFragment {
    const { type } = this.props;

    const snackBarClasses = classNames({
      [classes.snackBar]: true,
      [classes.snackBar__error]: type === 'error',
      [classes.snackBar__success]: type === 'success',
    });

    return this.compile(tmpl, { snackBarClasses });
  }
}

export const SnackBar = connect(SnackBarClass, (state) => {
  const { message, isVisible, type } = state.snackBar;

  return {
    message,
    isVisible: message && isVisible,
    type,
  };
});
