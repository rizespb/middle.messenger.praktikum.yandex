import { TAnyObject } from '@/shared/types';

export const setProperty = (
  object: TAnyObject | unknown,
  path: string,
  value: unknown
): TAnyObject | unknown => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const pathArray = path.split('.');

  pathArray.reduce((acc, key, index, array) => {
    const isLast = index === array.length - 1;

    if (isLast) {
      acc[key] = value;

      return acc;
    }

    const current = acc[key];

    if (typeof current !== 'object' || current === null) {
      acc[key] = {};
    }

    return acc[key] as TAnyObject;
  }, object as TAnyObject);

  return object;
};
