import { TAnyObject } from '@/shared/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const merge = (lhs: any, rhs: any): TAnyObject => {
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
      result[key] = merge(lhsValue, rhsValue);
    } else {
      result[key] = rhsValue !== undefined ? rhsValue : lhsValue;
    }

    delete rhsCopy[key];
  });

  result = { ...result, ...rhsCopy };

  return result;
};
