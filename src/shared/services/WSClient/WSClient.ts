import { servicesUrls } from '@/shared/constants';

export class WSClient {
  private socket: WebSocket;

  private pingIntervalId: ReturnType<typeof setInterval>;

  private pingIntervalDelay: number;

  constructor(userId: number, chatId: number, token: string, pingIntervalDelay: number = 20000) {
    const wssUrl = `${servicesUrls.messages}/${userId}/${chatId}/${token}`;

    const socket = new WebSocket(wssUrl);

    socket.addEventListener('open', (): void => {
      // eslint-disable-next-line no-console
      console.log('Socket connected');

      this.setupPing();
    });

    socket.addEventListener('close', (): void => {
      // eslint-disable-next-line no-console
      console.log('Socket disconnected');

      clearInterval(this.pingIntervalId);
    });

    this.socket = socket;
    this.pingIntervalDelay = pingIntervalDelay;
  }

  onOpen(cb: (socket: WebSocket) => void): void {
    this.socket.addEventListener('open', (): void => {
      cb(this.socket);
    });
  }

  onMessage<T>(cb: (data: T) => void): void {
    this.socket.addEventListener('message', (event): void => {
      try {
        const data = JSON.parse(event.data);
        if (['pong', 'user connected'].includes(data?.type)) {
          return;
        }

        cb(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Could not parse messaga data');
      }
    });
  }

  getOldMessages(count: string = '0'): void {
    this.send({
      content: count,
      type: 'get old',
    });
  }

  sendMessage(message: string): void {
    this.send({
      content: message,
      type: 'message',
    });
  }

  close(): void {
    this.socket.close();
  }

  private setupPing(): void {
    this.pingIntervalId = setInterval(() => {
      this.send({
        type: 'ping',
      });
    }, this.pingIntervalDelay);
  }

  private send(data: unknown): void {
    this.socket.send(JSON.stringify(data));
  }
}
