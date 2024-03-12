import { router } from '@/entities/Router';
import { userController } from '@/entities/User';
import { EPagesUrls } from '@/shared/constants';

export const initApp = (): void => {
  const { fetchUserInfo, fetchChatsList } = userController;
  Promise.all([fetchUserInfo(), fetchChatsList()]).then(() => {
    router.start();

    const { user, chats } = appStore.getState();

    if (user === null || chats === null) {
      router.go(EPagesUrls.LogInPage);
    }

    appStore.getState().initialPage.hide();
  });
};
