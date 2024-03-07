import { isObject } from './isObject';

export const cloneDeep = <T extends object>(object: T): T => {
  const copy = (Array.isArray(object) ? [] : Object.create(Object.getPrototypeOf(object))) as T;

  const keys = Object.keys(object) as (keyof T)[];

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    const value = object[key];

    if (isObject(value)) {
      copy[key] = cloneDeep(value);
    } else {
      copy[key] = value;
    }
  }

  return copy;
};
