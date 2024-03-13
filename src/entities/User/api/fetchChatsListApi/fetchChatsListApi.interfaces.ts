export type TFetchChatsListApiResponse = {
  id: number;
  title: string;
  avatar: string | null;
  created_by: number;
  unread_count: number;
  last_message: {
    content: string;
    time: string;
  };
}[];
