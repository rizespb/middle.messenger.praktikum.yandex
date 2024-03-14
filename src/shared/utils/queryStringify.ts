import { isObject } from './isObject';

const isArrayOrObject = (value: unknown): value is [] | object =>
  isObject(value) || Array.isArray(value);

const getPairs = <T extends object | []>(data: T, parentKey?: string): [string, string][] => {
  const result: [string, string][] = [];

  Object.entries(data).forEach(([key, value]) => {
    const keyString = parentKey ? `${parentKey}[${key}]` : key;

    if (isArrayOrObject(value)) {
      result.push(...getPairs(value, keyString));

      return ['test', 'testValue'];
    }

    // можно сразу закодировать все символы, которые являются зарезервированными в URI, с помощью encodeURIComponent. «Процентное» кодирование  предотвращает проблемы с синтаксическим анализом, когда необходимо распарсить URL. Бывают ситуации, когда в query-параметрах нужно передавать другой URL (в котором могут быть свои query-параметры) и без кодирования не обойтись
    return result.push([keyString, encodeURIComponent(String(value))]);
  });

  return result;
};

// Функция, которая преобразует объект в строку в формате GET-запроса
export const queryStringify = <T extends object | []>(data: T): string => {
  if (!isArrayOrObject(data)) {
    throw new Error('input must be an object');
  }

  const pairs = getPairs(data);

  return pairs.map((pair) => pair.join('=')).join('&');
};
