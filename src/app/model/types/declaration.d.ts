declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg';
declare module '*.webp';

declare module '*.hbs?raw';

declare type THtml = string;

declare type TUuid = string;
