export enum EMessageType {
  Text,
  Image,
}

export enum EMessageDirection {
  Incoming,
  Outcoming,
}

export enum EMessageStatus {
  Delivered,
  Read,
}

export interface IMessage {
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
