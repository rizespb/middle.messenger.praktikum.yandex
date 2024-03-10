import { Block } from '@/shared/render';
import { Store } from '@/shared/store';

declare global {
  module '*.scss' {
    const content: Record<string, string>;
    export default content;
  }

  module '*.svg';
  module '*.webp';
  module '*.gif';

  module '*.hbs?raw';

  type THtml = string;

  type TUuid = string;

  interface Window {
    appStore: Store;
  }

  interface IAppState {
    isLoading: boolean;
    snackBar: {
      isVisible: boolean;
      message: string;
    };
    user: IUser | null;
    initialPage: Block;
  }

  const appStore: Store;
}

export {};
