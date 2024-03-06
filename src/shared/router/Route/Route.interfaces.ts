import { Block, IBlockProps } from '@/shared/render';

export interface IRouteProps {
  // селектор для root-контейнера
  rootQuery: string;
}

export type TBlockClass = new (props: IBlockProps) => Block;
