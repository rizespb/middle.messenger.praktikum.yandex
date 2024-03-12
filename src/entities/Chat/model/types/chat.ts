export interface IChat {
  id: number;
  title: string;
  avatar: string | null;
  created_by: number;
  unread_count: number;
  last_message: {
    content: string;
    id: number;
    time: string;
  } | null;
}
