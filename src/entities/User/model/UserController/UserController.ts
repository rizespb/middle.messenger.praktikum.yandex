import { router } from '@/entities/Router';
import { EPagesUrls } from '@/shared/constants';
import { showSnackBar } from '@/shared/ui';
import { merge } from '@/shared/utils';
import { TAnyObject } from '@/shared/types';
import { fetchChatsListApi } from '../../api/fetchChatsListApi/fetchChatsListApi';
import {
  ILogInData,
  IUpdatePasswordApiData,
  IUpdateProfileData,
  IUserData,
  createUserApi,
  fetchUserInfoApi,
  logInApi,
  logOutApi,
  updateAvatarApi,
  updatePasswordApi,
  updateProfileApi,
} from '../../api';

class UserController {
  createUser(userData: IUserData): Promise<void> {
    appStore.set('isLoading', true);

    return createUserApi(userData)
      .then(() => fetchUserInfoApi())
      .then((res) => {
        appStore.set('user', res);
        router.go(EPagesUrls.ChatsPage);
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);

        showSnackBar(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }

  logIn(logInData: ILogInData): Promise<void> {
    appStore.set('isLoading', true);

    return logInApi(logInData)
      .then(() => Promise.all([fetchUserInfoApi(), fetchChatsListApi()]))
      .then((res) => {
        const [userInfo, chatsList] = res;

        appStore.set('user', userInfo);
        appStore.set('chats', chatsList);

        router.go(EPagesUrls.ChatsPage);
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);

        showSnackBar(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }

  fetchUserInfo(): Promise<void> {
    return fetchUserInfoApi()
      .then((res) => {
        appStore.set('user', res);
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);
      });
  }

  logOut(): Promise<void> {
    return logOutApi()
      .then(() => {
        appStore.set('user', null);
        appStore.set('chats', null);

        router.go(EPagesUrls.LogInPage);
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);
      });
  }

  fetchChatsList(): Promise<void> {
    return fetchChatsListApi()
      .then((res) => {
        appStore.set('chats', res);
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);
      });
  }

  updateProfile(userData: IUpdateProfileData): Promise<void> {
    appStore.set('isLoading', true);

    return updateProfileApi(userData)
      .then((res) => {
        const currentUser = appStore.getState().user;

        if (!currentUser) {
          throw new Error('User is not defined');
        }

        const user = merge(currentUser as unknown as TAnyObject, res as unknown as TAnyObject);

        appStore.set('user', user);
        appStore.set('profileMode', 'view');
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);

        showSnackBar(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }

  updatePassword(passwordsData: IUpdatePasswordApiData): Promise<void> {
    appStore.set('isLoading', true);

    return updatePasswordApi(passwordsData)
      .then(() => {
        appStore.set('profileMode', 'view');
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);

        showSnackBar(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }

  updateAvatar(avatar: FormData): Promise<void> {
    appStore.set('isLoading', true);

    return updateAvatarApi(avatar)
      .then((res) => {
        appStore.set('isUpdateAvatarFormVisible', false);
        appStore.set('user', res);
      })
      .catch((error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);

        showSnackBar(error.message);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }
}

export const userController = new UserController();
