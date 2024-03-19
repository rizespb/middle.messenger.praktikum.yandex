/* eslint-disable max-classes-per-file */
import { Block } from '@/shared/render';
import { Router } from './Router';
import { ERouterEvents } from './Router.interfaces';

const textContent = 'text-content';
const errorContent = 'error-content';
const rootQuery = 'root-id';
const pathname = 'test-path';
const checkIsProtectedRoutesAllowedMock = jest.fn();
const checkIsProtectedRoutesAllowedFactory = (value: boolean): (() => boolean) =>
  checkIsProtectedRoutesAllowedMock.mockReturnValue(value);

class TestBlock extends Block {
  protected render(): DocumentFragment {
    return this.compile(`<div>${textContent}</div>`);
  }
}

class ErrorTestBlock extends Block {
  protected render(): DocumentFragment {
    return this.compile(`<div>${errorContent}</div>`);
  }
}

const createDOMContainer = (): void => {
  const root = document.createElement('div');

  root.id = rootQuery;

  document.body.appendChild(root);
};

describe('Router', () => {
  let router: Router;
  let pushStateSpy: jest.SpyInstance;
  let goSpy: jest.SpyInstance;
  let forwardSpy: jest.SpyInstance;

  beforeAll(() => {
    goSpy = jest.spyOn(window.history, 'go');
    forwardSpy = jest.spyOn(window.history, 'forward');
    pushStateSpy = jest.spyOn(window.history, 'pushState');
  });

  beforeEach(() => {
    router = new Router();

    router.init(`#${rootQuery}`, checkIsProtectedRoutesAllowedFactory(true), ErrorTestBlock);

    createDOMContainer();
  });

  afterEach(() => {
    jest.clearAllMocks();
    Router.instance = undefined as unknown as Router;
  });

  test('should be singletone', () => {
    const router1 = new Router();
    const router2 = new Router();

    expect(router1).toBe(router2);
  });

  describe('go', () => {
    test('should trigger pushState action from hsitory', () => {
      expect(pushStateSpy).not.toHaveBeenCalled();

      router.go('/');

      expect(pushStateSpy).toHaveBeenCalled();
    });

    test('should trigger _onRoute action from router', () => {
      const onRouteSpy = jest.spyOn(router, '_onRoute');

      expect(onRouteSpy).not.toHaveBeenCalled();
      router.go('/');

      expect(onRouteSpy).toHaveBeenCalled();
    });

    test('should emit correct event', () => {
      const emitSpy = jest.spyOn(router, 'emit');

      expect(emitSpy).not.toHaveBeenCalled();
      router.go('/');

      expect(emitSpy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledWith(ERouterEvents.PopState);
    });
  });

  describe('back', () => {
    test('should trigger go action from hsitory', () => {
      expect(goSpy).not.toHaveBeenCalled();

      router.back();

      expect(goSpy).toHaveBeenCalled();
    });

    test('should emit correct event', () => {
      const emitSpy = jest.spyOn(router, 'emit');

      expect(emitSpy).not.toHaveBeenCalled();
      router.back();

      expect(emitSpy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledWith(ERouterEvents.PopState);
    });
  });

  describe('forward', () => {
    test('should trigger forward action from hsitory', () => {
      expect(forwardSpy).not.toHaveBeenCalled();

      router.forward();

      expect(forwardSpy).toHaveBeenCalled();
    });

    test('should emit correct event', () => {
      const emitSpy = jest.spyOn(router, 'emit');

      expect(emitSpy).not.toHaveBeenCalled();
      router.forward();

      expect(emitSpy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledWith(ERouterEvents.PopState);
    });
  });

  describe('use', () => {
    test('should trigger _checkIsRouterInitialized from router', () => {
      const checkIsRouterInitializedSpy = jest.spyOn(router, '_checkIsRouterInitialized');

      expect(checkIsRouterInitializedSpy).not.toHaveBeenCalled();

      router.use(pathname, TestBlock, false);

      expect(checkIsRouterInitializedSpy).toHaveBeenCalledTimes(1);
    });

    test('should add new route to routes', () => {
      expect(router.routes.length).toBe(0);

      router.use(pathname, TestBlock, false);

      const newRoute = router.routes.find(({ _pathname }) => _pathname === pathname);

      expect(router.routes.length).toBe(1);
      expect(newRoute).toBeDefined();
    });
  });

  describe('getRoute', () => {
    test('should return route according to passing pathname', () => {
      expect(router.routes.length).toBe(0);

      router.use(pathname, TestBlock, false);

      expect(router.routes.length).toBe(1);

      const route = router.getRoute(pathname);

      expect(route).toBeDefined();
    });

    test('should return null if no route found', () => {
      expect(router.routes.length).toBe(0);

      const route = router.getRoute(pathname);

      expect(route).toBeNull();
    });
  });
});
