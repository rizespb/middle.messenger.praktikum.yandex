export enum EMessageType {
  Text = 'message',
  Image = 'file',
}

export enum EMessageDirection {
  Incoming = 'incoming',
  Outcoming = 'outcomig',
}

export enum EMessageStatus {
  Delivered = 'delivered',
  Read = 'read',
}

export interface IMessage {
  id: number;
  type: EMessageType;
  date: string;
  time: string;
  content: string;
  direction: EMessageDirection;
  status: EMessageStatus;
}

export interface IMessagesGroup {
  messages: IMessage[];
  date: string;
}
