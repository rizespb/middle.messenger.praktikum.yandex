import { servicesUrls } from '@/shared/constants';

export class WSClient {
  socket: WebSocket;

  constructor(userId: number, chatId: number, token: string) {
    const wssUrl = `${servicesUrls.messages}/${userId}/${chatId}/${token}`;

    const socket = new WebSocket(wssUrl);

    socket.addEventListener('open', (): void => {
      console.log('Socket connected');
    });

    this.socket = socket;
  }

  onOpen(cb: (socket: WebSocket) => void): void {
    this.socket.addEventListener('open', (): void => {
      cb(this.socket);
    });
  }

  onMessage<T>(cb: (data: T) => void): void {
    this.socket.addEventListener('message', (event): void => {
      cb(event.data);
    });
  }

  getOldMessages(count: string = '0'): void {
    this.socket.send(
      JSON.stringify({
        content: count,
        type: 'get old',
      })
    );
  }

  sendMessage(message: string): void {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }
}
