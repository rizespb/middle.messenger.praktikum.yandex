import {
  EMethods,
  IHTTPOptions,
  IHeaders,
  TOptionsWithoutMethod,
} from './HTTPTransport.interfaces';

const queryStringify = <T extends Record<string, string>>(data: T): string => {
  if (typeof data !== 'object') {
    return data;
  }

  const query = Object.entries(data).reduce((acc, [key, value], index, array) => {
    const isLast = index === array.length - 1;

    const postFix = isLast ? '' : '&';

    return `${acc}${key}=${value}${postFix}`;
  }, '?');

  return query;
};

export class HTTPTransport {
  get = <T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> => {
    const { data, timeout } = options;

    const query = queryStringify(data);

    const formattedUrl = typeof query === 'string' ? `${url}${query}` : url;

    return this.request(formattedUrl, { ...options, method: EMethods.GET }, timeout);
  };

  post = <T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> => {
    const { timeout } = options;

    return this.request(url, { ...options, method: EMethods.POST }, timeout);
  };

  put = <T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> => {
    const { timeout } = options;

    return this.request(url, { ...options, method: EMethods.PUT }, timeout);
  };

  delete = <T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> => {
    const { timeout } = options;

    return this.request(url, { ...options, method: EMethods.DELETE }, timeout);
  };

  patch = <T>(url: string, options: TOptionsWithoutMethod = {}): Promise<T> => {
    const { timeout } = options;

    return this.request(url, { ...options, method: EMethods.PATCH }, timeout);
  };

  request = <T>(
    url: string,
    options: IHTTPOptions = { method: EMethods.GET },
    timeout = 5000
  ): Promise<T> => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.timeout = timeout;

      this.setHeaders(xhr, headers);

      xhr.open(method, url);

      xhr.onload = (): void => {
        resolve(xhr as T);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === EMethods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };

  setHeaders(xhr: XMLHttpRequest, headers?: IHeaders): void {
    if (!headers) {
      return;
    }

    Object.entries(headers).forEach(([key, value]) => {
      xhr.setRequestHeader(key, value);
    });
  }
}
