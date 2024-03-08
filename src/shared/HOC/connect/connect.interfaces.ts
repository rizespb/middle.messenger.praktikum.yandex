import { IBlockProps, TClearProps } from '@/shared/render';

export type TMapStateToProps<T extends IBlockProps> = (
  appState: IAppState
) => Partial<TClearProps<T>>;
