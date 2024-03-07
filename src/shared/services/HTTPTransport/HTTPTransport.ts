import { queryStringify } from '@/shared/utils';
import { EMethods, IHTTPOptions, IHeaders, THTTPMethod } from './HTTPTransport.interfaces';

export class HTTPTransport {
  get: THTTPMethod = (url, options = {}) => {
    const { data, timeout } = options;

    const query = queryStringify(data);

    const formattedUrl = typeof query === 'string' ? `${url}?${query}` : url;

    return this.request(formattedUrl, { ...options, method: EMethods.GET }, timeout);
  };

  post: THTTPMethod = (url, options = {}) => {
    const { timeout } = options;

    return this.request(url, { ...options, method: EMethods.POST }, timeout);
  };

  put: THTTPMethod = (url, options = {}) => {
    const { timeout } = options;

    return this.request(url, { ...options, method: EMethods.PUT }, timeout);
  };

  delete: THTTPMethod = (url, options = {}) => {
    const { timeout } = options;

    return this.request(url, { ...options, method: EMethods.DELETE }, timeout);
  };

  patch: THTTPMethod = (url, options = {}) => {
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
