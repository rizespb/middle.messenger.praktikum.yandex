export type TAnyObject<T = unknown> = {
  [key: PropertyKey]: T;
};
