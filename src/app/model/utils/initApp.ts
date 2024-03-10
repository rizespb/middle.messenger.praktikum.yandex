import { router } from '@/entities/Router';
import { userController } from '@/entities/User';
import { EPagesUrls } from '@/shared/constants';

export const initApp = (): void => {
  userController.fetchUserInfo().then(() => {
    router.start();

    if (appStore.getState().user === null) {
      router.go(EPagesUrls.LogInPage);
    }

    appStore.getState().initialPage.hide();
  });
};
