declare global {
  module '*.scss' {
    const content: Record<string, string>;
    export default content;
  }

  module '*.svg';
  module '*.webp';

  module '*.hbs?raw';

  type THtml = string;

  type TUuid = string;

  interface Window {
    appStore: Store;
  }

  interface IAppState {
    isLoading: boolean;
    isLoggedIn: boolean;
    snackBar: {
      isVisible: boolean;
      message: string;
    };
  }

  const appStore: Store;
}

export {};
