import { queryStringify } from '@/shared/utils';
import { EMethods, IHTTPOptions, IHeaders, THTTPMethod } from './HTTPTransport.interfaces';
import { responseMessages } from './HTTPTransport.constants';

export class HTTPTransportClass {
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
    const { method, data, headers, withCredentials = true, responseType = 'json' } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.timeout = timeout;
      xhr.withCredentials = withCredentials;
      xhr.responseType = responseType;

      this.setHeaders(xhr, headers);

      xhr.open(method, url);

      xhr.onload = (): void => {
        const status = xhr.status || 0;

        if (status >= 200 && status < 300) {
          resolve(xhr as T);
        } else {
          const roundedStatus = (Math.floor(status / 100) * 100) as keyof typeof responseMessages;

          reject(
            new Error(
              `Response status is ${roundedStatus}. Message: ${responseMessages[roundedStatus]}`
            )
          );
        }
      };

      xhr.onabort = (): void => reject(new Error('aborted'));
      xhr.onerror = (): void => reject(new Error('network error'));
      xhr.ontimeout = (): void => reject(new Error('timeout'));

      if (method === EMethods.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
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

export const HTTPTransport = new HTTPTransportClass();
