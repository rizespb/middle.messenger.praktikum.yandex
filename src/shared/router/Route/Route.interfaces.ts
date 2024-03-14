import { Block, IBlockProps } from '@/shared/render';

export interface IRouteProps {
  // селектор для root-контейнера
  rootQuery: string;
  // Является ли роут приватным
  isProtected: boolean;
}

export type TBlockClass = new (props: IBlockProps) => Block;
