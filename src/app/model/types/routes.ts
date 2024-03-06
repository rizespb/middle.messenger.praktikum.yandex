import { Block } from '@/shared/render';

export interface IRouteData {
  pathname: string;
  block: new (...props: unknown[]) => Block;
  title?: string;
}
