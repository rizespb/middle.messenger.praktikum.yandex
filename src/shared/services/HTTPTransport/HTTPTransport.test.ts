import { HTTPTransportClass } from './HTTPTransport';
import { EMethods } from './HTTPTransport.interfaces';

describe('HTTPTransportClass', () => {
  let HTTPTransport: HTTPTransportClass;
  let requestSpy: jest.SpyInstance;

  const url = 'test-url.com';
  const data = {
    payload: 'Test payload',
  };

  beforeEach(() => {
    HTTPTransport = new HTTPTransportClass();

    requestSpy = jest.spyOn(HTTPTransport, 'request').mockResolvedValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get', () => {
    test('should trigger request method from HTTPTransport with correct arguments', () => {
      expect(requestSpy).not.toHaveBeenCalled();

      HTTPTransport.get(url);

      expect(requestSpy).toHaveBeenCalledTimes(1);
      expect(requestSpy).toHaveBeenCalledWith(
        url,
        {
          method: EMethods.GET,
        },
        undefined
      );
    });

    test('should convert passing data to query params', () => {
      HTTPTransport.get(url, {
        data: { param: 'testValue' },
      });

      expect(requestSpy).toHaveBeenCalledWith(
        `${url}?param=testValue`,
        {
          method: EMethods.GET,
          data: { param: 'testValue' },
        },
        undefined
      );
    });
  });

  describe('post', () => {
    test('should trigger request method from HTTPTransport ', () => {
      expect(requestSpy).not.toHaveBeenCalled();

      HTTPTransport.post(url);

      expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    test('should pass data to request method', () => {
      HTTPTransport.post(url, { data });

      expect(requestSpy).toHaveBeenCalledWith(
        url,
        {
          method: EMethods.POST,
          data,
        },
        undefined
      );
    });
  });

  describe('patch', () => {
    test('should trigger request method from HTTPTransport ', () => {
      expect(requestSpy).not.toHaveBeenCalled();

      HTTPTransport.patch(url);

      expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    test('should pass data to request method', () => {
      HTTPTransport.patch(url, { data });

      expect(requestSpy).toHaveBeenCalledWith(
        url,
        {
          method: EMethods.PATCH,
          data,
        },
        undefined
      );
    });
  });

  describe('put', () => {
    test('should trigger request method from HTTPTransport', () => {
      expect(requestSpy).not.toHaveBeenCalled();

      HTTPTransport.put(url);

      expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    test('should pass data to request method', () => {
      HTTPTransport.put(url, { data });

      expect(requestSpy).toHaveBeenCalledWith(
        url,
        {
          method: EMethods.PUT,
          data,
        },
        undefined
      );
    });
  });

  describe('delete', () => {
    test('should trigger request method from HTTPTransport with correct arguments', () => {
      expect(requestSpy).not.toHaveBeenCalled();

      HTTPTransport.delete(url);

      expect(requestSpy).toHaveBeenCalledTimes(1);
    });

    test('should pass data to request method', () => {
      HTTPTransport.delete(url, { data });

      expect(requestSpy).toHaveBeenCalledWith(
        url,
        {
          method: EMethods.DELETE,
          data,
        },
        undefined
      );
    });

    test('should pass timeout to request method', () => {
      const timeout = 3000;

      HTTPTransport.delete(url, { data, timeout });

      expect(requestSpy).toHaveBeenCalledWith(
        url,
        {
          method: EMethods.DELETE,
          data,
          timeout,
        },
        timeout
      );
    });
  });

  test('should trigger setRequestHeader method on passing XMLHttpRequest instantce', () => {
    const setRequestHeaderMock = jest.fn();

    const xhrMock = {
      setRequestHeader: setRequestHeaderMock,
    } as unknown as XMLHttpRequest;

    const headers = {
      testHeader: 'testValue',
    };

    expect(setRequestHeaderMock).not.toHaveBeenCalled();
    HTTPTransport.setHeaders(xhrMock, headers);

    expect(setRequestHeaderMock).toHaveBeenCalledTimes(1);
    expect(setRequestHeaderMock).toHaveBeenCalledWith('testHeader', 'testValue');
  });
});
