import { TSnackBarType } from './SnackBar.interfaces';

export const showSnackBar = (message: string, type: TSnackBarType, delay = 3000): void => {
  appStore.set('snackBar', {
    message,
    isVisible: true,
    type,
  });

  setTimeout(() => {
    appStore.set('snackBar', {
      message: '',
      isVisible: false,
      type: null,
    });
  }, delay);
};

export const handleErrorWithSnackBar = (error: Error): void => {
  // eslint-disable-next-line no-console
  console.error(error.message);

  showSnackBar(error.message, 'error');
};
