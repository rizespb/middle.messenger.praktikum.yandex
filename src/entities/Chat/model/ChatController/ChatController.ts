import { showSnackBar } from '@/shared/ui';
import { userController } from '@/entities/User';
import { handleErrorWithSnackBar } from '@/shared/ui/SnackBar';
import { addUserApi, deleteUserApi, fetchTokenApi } from '../../api';

export class ChatController {
  fetchToken(chatId: number): Promise<string | null> {
    return fetchTokenApi(chatId)
      .then((res) => res.token)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);

        showSnackBar(error.message, 'error');

        return null;
      });
  }

  addUser(login: string, chatId: number): Promise<void> {
    appStore.set('isLoading', true);

    return userController
      .findUserByLogin(login)
      .then((users) => {
        if (!users) {
          throw new Error('Пользователь не найден');
        }

        const targetUser = users.find((user) => user.login === login);

        if (!targetUser) {
          throw new Error('Пользователь не найден');
        }

        return addUserApi(targetUser.id, chatId);
      })
      .then(() => {
        showSnackBar('Пользователь добавлен', 'success');
        appStore.set('isManageUserlistFormVisible', false);
      })
      .catch((error) => {
        handleErrorWithSnackBar(error);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }

  deleteUser(login: string, chatId: number): Promise<void> {
    appStore.set('isLoading', true);

    return userController
      .findUserByLogin(login)
      .then((users) => {
        if (!users) {
          throw new Error('Пользователь не найден');
        }

        const targetUser = users.find((user) => user.login === login);

        if (!targetUser) {
          throw new Error('Пользователь не найден');
        }

        return deleteUserApi(targetUser.id, chatId);
      })
      .then(() => {
        showSnackBar('Пользователь удален', 'success');
        appStore.set('isManageUserlistFormVisible', false);
      })
      .catch((error) => {
        handleErrorWithSnackBar(error);
      })
      .finally(() => {
        appStore.set('isLoading', false);
      });
  }
}

export const chatController = new ChatController();
