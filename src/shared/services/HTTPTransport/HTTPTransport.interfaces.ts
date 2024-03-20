export enum EMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface IHeaders {
  [key: string]: string;
}

export interface IHTTPOptions {
  method: EMethods;
  data?: unknown;
  timeout?: number;
  headers?: IHeaders;
  withCredentials?: boolean;
  responseType?: XMLHttpRequestResponseType;
}

export type TOptionsWithoutMethod = Omit<IHTTPOptions, 'method'>;

export type THTTPMethod = <T = unknown>(url: string, options?: TOptionsWithoutMethod) => Promise<T>;
