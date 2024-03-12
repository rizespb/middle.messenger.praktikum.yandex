import { EPagesUrls } from '@/shared/constants';

export const getChatId = (): number | null => {
  const { pathname } = window.location;

  if (!pathname.startsWith(EPagesUrls.ChatsPage)) {
    return null;
  }

  const chatIdStr = pathname.split('/')[2];

  const chatId = Number(chatIdStr);

  return chatId || null;
};
