import { Block } from '@/shared/render';
import { IRenderMessageProps } from '../../types';

export type TMessageBlock = new (props: IRenderMessageProps) => Block<IRenderMessageProps>;
