declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.hbs?raw';

declare type THtml = string;
