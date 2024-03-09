import { router } from '@/entities/Router';
import { EPagesUrls } from '@/shared/constants';
import { ILogInData, IUserData, createUserApi, logInApi } from '../../api';

class UserController {
  createUser(userData: IUserData): void {
    appStore.set('isLoading', true);

    createUserApi(userData)
      .finally(() => {
        appStore.set('isLoading', false);
      })
      .then(() => {
        appStore.set('isLoggedIn', true);
        router.go(EPagesUrls.ChatsPage);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  }

  logIn(logInData: ILogInData): void {
    appStore.set('isLoading', true);

    logInApi(logInData)
      .finally(() => {
        appStore.set('isLoading', false);
      })
      .then(() => {
        appStore.set('isLoggedIn', true);
        router.go(EPagesUrls.ChatsPage);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  }
}

export const userController = new UserController();
