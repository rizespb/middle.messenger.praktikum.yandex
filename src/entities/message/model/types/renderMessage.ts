import { EMessageDirection, EMessageStatus } from './message';

export interface IRenderMessageProps {
  content: string;
  time: string;
  status: EMessageStatus;
  direction: EMessageDirection;
}
