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

export const handleErrorWithSnackBar = (error: Error): void => {
  // eslint-disable-next-line no-console
  console.error(error.message);

  showSnackBar(error.message);
};
