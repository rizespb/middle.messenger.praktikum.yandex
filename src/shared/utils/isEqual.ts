// const isObject = (arg: object | unknown): arg is object =>
//   typeof arg === 'object' &&
//   arg !== null &&
//   value.constructor === Object &&
//   Object.prototype.toString.call(value) === '[object Object]';

// const isEqual = (a: object, b: object): boolean => {
//   const aKeys = Object.keys(a) as (keyof typeof a)[];
//   const bKeys = Object.keys(b);

//   if (aKeys.length !== bKeys.length) {
//     return false;
//   }

//   for (let i = 0; i < aKeys.length; i = i + 1) {
//     const key = aKeys[i];

//     const aValue = a[key];
//     const bValue = b[key];

//     if (isObject(aValue) && isObject(bValue)) {
//       if (isEqual(aValue, bValue)) {
//         continue;
//       }

//       return false;
//     }

//     if (aValue !== bValue) {
//       return false;
//     }
//   }

//   return true;
// };

export const isEqual = (a: unknown, b: unknown): boolean => {
  if (Number.isNaN(a)) {
    return Number.isNaN(b);
  }

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return a === b;
  }

  const aKeys = Object.keys(a) as (keyof typeof a)[];
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (let i = 0; i < aKeys.length; i += 1) {
    const key = aKeys[i];

    const isPropsEqual = isEqual(a[key], b[key]);

    if (!isPropsEqual) {
      return false;
    }
  }

  return true;
};
