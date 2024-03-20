/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { SinonStub, createSandbox } from 'sinon';
import { expect, use } from 'chai';
import * as sinonChai from 'sinon-chai';
import { HTTPTransportClass } from './HTTPTransport';
import { EMethods } from './HTTPTransport.interfaces';

describe('HTTPTransportClass', () => {
  use(sinonChai.default);
  const sandBox = createSandbox();

  let HTTPTransport: HTTPTransportClass;
  let request: SinonStub;

  const url = 'test-url.com';
  const data = {
    payload: 'Test payload',
  };

  beforeEach(() => {
    HTTPTransport = new HTTPTransportClass();

    request = sandBox.stub(HTTPTransport, 'request').callsFake(() => Promise.resolve());
  });

  afterEach(() => {
    sandBox.restore();
  });

  describe('get', () => {
    it('should trigger request method from HTTPTransport with correct arguments', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.get(url);

      expect(request).to.have.been.called;
      expect(request).calledWithMatch(url, {
        method: EMethods.GET,
      });
    });

    it('shuld convert passing data to query params', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.get(url, {
        data: { param: 'testValue' },
      });

      expect(request).calledWithMatch(`${url}?param=testValue`, {
        method: EMethods.GET,
      });
    });
  });

  describe('post', () => {
    it('should trigger request method from HTTPTransport with correct arguments', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.post(url);

      expect(request).to.have.been.called;
      expect(request).calledWithMatch(url, {
        method: EMethods.POST,
      });
    });

    it('should pass data to request method', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.post(url, { data });

      expect(request).calledWithMatch(url, {
        method: EMethods.POST,
        data,
      });
    });
  });

  describe('patch', () => {
    it('should trigger request method from HTTPTransport with correct arguments', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.patch(url);

      expect(request).to.have.been.called;
      expect(request).calledWithMatch(url, {
        method: EMethods.PATCH,
      });
    });

    it('should pass data to request method', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.patch(url, { data });

      expect(request).calledWithMatch(url, {
        method: EMethods.PATCH,
        data,
      });
    });
  });

  describe('put', () => {
    it('should trigger request method from HTTPTransport with correct arguments', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.put(url);

      expect(request).to.have.been.called;
      expect(request).calledWithMatch(url, {
        method: EMethods.PUT,
      });
    });

    it('should pass data to request method', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.put(url, { data });

      expect(request).calledWithMatch(url, {
        method: EMethods.PUT,
        data,
      });
    });
  });

  describe('delete', () => {
    it('should trigger request method from HTTPTransport with correct arguments', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.delete(url);

      expect(request).to.have.been.called;
      expect(request).calledWithMatch(url, {
        method: EMethods.DELETE,
      });
    });

    it('should pass data to request method', () => {
      expect(request).not.to.have.been.called;

      HTTPTransport.delete(url, { data });

      expect(request).calledWithMatch(url, {
        method: EMethods.DELETE,
        data,
      });
    });

    it('should pass timeout to request method', () => {
      expect(request).not.to.have.been.called;

      const timeout = 3000;

      HTTPTransport.delete(url, { data, timeout });

      expect(request).calledWithMatch(
        url,
        {
          method: EMethods.DELETE,
          data,
        },
        timeout
      );
    });
  });

  it('should trigger setRequestHeader method on passing XMLHttpRequest instantce', () => {
    const xhrMock = {
      setRequestHeader: () => {},
    } as unknown as XMLHttpRequest;

    const setRequestHeader = sandBox.stub(xhrMock, 'setRequestHeader');

    const headers = {
      testHeader: 'testValue',
    };

    expect(setRequestHeader).not.to.have.been.called;

    HTTPTransport.setHeaders(xhrMock, headers);

    expect(setRequestHeader).to.have.been.called;
    expect(setRequestHeader).calledWithMatch('testHeader', 'testValue');
  });
});
