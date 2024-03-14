export type TAnyObject<T = unknown> = {
  [key in PropertyKey]?: T;
};
