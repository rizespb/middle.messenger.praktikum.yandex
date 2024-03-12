import { TAnyObject } from '@/shared/types';

export const merge = (lhs: TAnyObject, rhs: TAnyObject): TAnyObject => {
  const rhsCopy = { ...rhs };
  let result = {} as TAnyObject;

  Object.keys(lhs).forEach((key) => {
    const lhsValue = lhs[key];
    const rhsValue = rhs[key];

    if (
      typeof lhsValue === 'object' &&
      lhsValue !== null &&
      typeof rhsValue === 'object' &&
      rhsValue !== null
    ) {
      result[key] = merge(lhsValue as TAnyObject, rhsValue as TAnyObject);
    } else {
      result[key] = rhsValue !== undefined ? rhsValue : lhsValue;
    }

    delete rhsCopy[key];
  });

  result = { ...result, ...rhsCopy };

  return result;
};
