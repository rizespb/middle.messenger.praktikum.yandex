import { router } from '@/entities/Router';
import { EPagesUrls } from '@/shared/constants';
import { IUserData, createUserApi } from '../../api';

class UserController {
  createUser(userData: IUserData): void {
    appStore.set('isLoading', true);

    createUserApi(userData)
      .then(() => {
        router.go(EPagesUrls.LogInPage);
      })
      .catch((error: Error) => {
        console.log(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }
}

export const userController = new UserController();
