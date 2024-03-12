export const showSnackBar = (message: string, delay = 3000): void => {
  appStore.set('snackBar', {
    message,
    isVisible: true,
  });

  setTimeout(() => {
    appStore.set('snackBar', {
      message: '',
      isVisible: false,
    });
  }, delay);
};
