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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  timeout?: number;
  headers?: IHeaders;
  withCredentials?: boolean;
  responseType?: XMLHttpRequestResponseType;
}

export type TOptionsWithoutMethod = Omit<IHTTPOptions, 'method'>;

export type THTTPMethod = <T = unknown>(url: string, options?: TOptionsWithoutMethod) => Promise<T>;
