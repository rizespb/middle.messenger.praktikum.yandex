import { showSnackBar } from '@/shared/ui';
import { fetchTokenApi } from '../../api';

export class ChatController {
  fetchToken(chatId: number): Promise<string | null> {
    return fetchTokenApi(chatId)
      .then((res) => res.token)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);

        showSnackBar(error.message);

        return null;
      });
  }
}

export const chatController = new ChatController();
