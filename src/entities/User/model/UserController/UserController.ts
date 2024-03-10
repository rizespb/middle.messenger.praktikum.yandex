import { router } from '@/entities/Router';
import { EPagesUrls } from '@/shared/constants';
import { showSnackBar } from '@/shared/ui';
import { ILogInData, IUserData, createUserApi, logInApi } from '../../api';

class UserController {
  createUser(userData: IUserData): void {
    appStore.set('isLoading', true);

    createUserApi(userData)
      .then(() => {
        appStore.set('isLoggedIn', true);

        router.go(EPagesUrls.ChatsPage);
      })
      .catch((error: Error) => {
        console.error(error.message);

        showSnackBar(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }

  logIn(logInData: ILogInData): void {
    appStore.set('isLoading', true);

    logInApi(logInData)
      .then(() => {
        appStore.set('isLoggedIn', true);
        router.go(EPagesUrls.ChatsPage);
      })
      .catch((error: Error) => {
        console.error(error.message);

        showSnackBar(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }
}

export const userController = new UserController();
