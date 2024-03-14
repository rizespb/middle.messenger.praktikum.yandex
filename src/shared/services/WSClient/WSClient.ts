import { servicesUrls } from '@/shared/constants';
import { IWSListeners } from './WSClient.interfaces';

export class WSClient {
  private socket: WebSocket;

  private pingIntervalId: ReturnType<typeof setInterval>;

  private pingIntervalDelay: number;

  private listeners: IWSListeners = {};

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
      socket.onopen = null;
      socket.onmessage = null;
      socket.onclose = null;
      socket.onerror = null;
    });

    this.socket = socket;
    this.pingIntervalDelay = pingIntervalDelay;
  }

  onOpen(cb: () => void): void {
    this.socket.addEventListener('open', cb);

    if (!this.listeners.open) {
      this.listeners.open = [];
    }

    this.listeners.open.push(cb);
  }

  onMessage<T>(cb: (data: T) => void): void {
    const handleMessage = (event: MessageEvent): void => {
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
    };

    this.socket.addEventListener('message', handleMessage);

    if (!this.listeners.message) {
      this.listeners.message = [];
    }

    this.listeners.message.push(handleMessage);
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
    this.unsubscribeAll();
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

  private unsubscribeAll(): void {
    Object.keys(this.listeners).forEach((eventName) => {
      this.listeners[eventName as keyof typeof this.listeners]?.forEach((cb) => {
        this.socket.removeEventListener(eventName, cb);
      });
    });

    this.listeners = {};
  }
}
