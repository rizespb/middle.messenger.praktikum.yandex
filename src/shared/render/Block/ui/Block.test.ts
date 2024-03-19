import { IBlockProps } from '@/shared/render';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import userEvent from '@testing-library/user-event';
import { EBlockEvents } from '../model';
import { Block } from './Block';

const propMock = 'test-prop';
const textContent = 'text-content';

class TestBlock extends Block {
  protected render(): DocumentFragment {
    return this.compile(`<div>${textContent}</div>`);
  }
}

const renderElement = (element: HTMLElement): void => {
  const root = document.createElement('div');

  document.body.appendChild(root);

  root?.appendChild(element);
};

describe('Block', () => {
  // let block: Block;

  beforeEach(() => {
    // block = new Block({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('on initialization', () => {
    test('should set passing children to children property', () => {
      let block = new Block({});

      // @ts-ignore
      expect(block.children.child).not.toBeDefined();

      block = new Block({
        children: {
          child: new Block({}),
        },
      });

      // @ts-ignore
      expect(block.children.child).toBeInstanceOf(Block);
    });

    test('should separate passing children from other props', () => {
      const block = new Block({
        children: {
          child: new Block({}),
        },
        propMock,
      });

      // @ts-ignore
      expect(block.children.child).toBeInstanceOf(Block);
      expect(block.props.propMock).toBe(propMock);
      // @ts-ignore
      expect(block.props.children).toBeUndefined();
    });
  });

  test('dispatchComponentDidMount should emit EBlockEvents.MOUNT event', () => {
    const block = new Block({});
    // @ts-ignore
    const eventBus = block.eventBus();
    const emitSpy = jest.spyOn(eventBus, 'emit');

    expect(emitSpy).not.toHaveBeenCalled();

    block.dispatchComponentDidMount();

    expect(emitSpy).toHaveBeenCalledWith(EBlockEvents.MOUNT, {});
  });

  test('getContent should return HTMLElement', () => {
    const block = new TestBlock({});

    const content = block.getContent();

    expect(content).toBeInstanceOf(HTMLElement);
    expect(content.textContent).toBe(textContent);
  });

  test('setInternalListeners should set eventListeners to element', async () => {
    const user = userEvent.setup();

    const consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation(jest.fn());

    const message = 'Hello';

    const block = new TestBlock({
      events: {
        click: (): void => {
          console.log(message);
        },
      },
    });

    const content = block.getContent();

    renderElement(content);

    expect(consoleLogSpy).not.toHaveBeenCalled();

    await user.click(content);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(message);
  });

  describe('setProps', () => {
    test('should merge passing props with initial props', () => {
      const prop1 = 'prop1';
      const prop2 = 'prop2';
      const prop3 = 'prop3';

      interface IProps extends IBlockProps {
        prop1?: string;
        prop2?: string;
        prop3?: string;
      }

      const block = new Block<IProps>({
        prop1,
        prop2,
      });

      expect(block.props.prop1).toBe(prop1);
      expect(block.props.prop2).toBe(prop2);

      const updatedProp2 = 'updated-prop2';

      block.setProps({
        prop2: updatedProp2,
        prop3,
      });

      expect(block.props.prop1).toBe(prop1);
      expect(block.props.prop2).toBe(updatedProp2);
      expect(block.props.prop3).toBe(prop3);
    });

    test('should emit EBlockEvents.MOUNT event if props were changed', () => {
      const prop1 = 'prop1';

      interface IProps extends IBlockProps {
        prop1: string;
      }

      const block = new Block<IProps>({
        prop1,
      });

      // @ts-ignore
      const eventBus = block.eventBus();
      const emitSpy = jest.spyOn(eventBus, 'emit');

      expect(emitSpy).not.toHaveBeenCalled();

      const updatedProp1 = 'updated-prop1';

      block.setProps({
        prop1: updatedProp1,
      });

      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(
        EBlockEvents.UPDATE,
        {
          prop1,
        },
        {
          prop1: updatedProp1,
        }
      );
    });

    test('should not emit event if props props were not changed', () => {
      const prop1 = 'prop1';

      interface IProps extends IBlockProps {
        prop1: string;
      }

      const block = new Block<IProps>({
        prop1,
      });

      // @ts-ignore
      const eventBus = block.eventBus();
      const emitSpy = jest.spyOn(eventBus, 'emit');

      expect(emitSpy).not.toHaveBeenCalled();

      block.setProps({
        prop1,
      });

      expect(emitSpy).not.toHaveBeenCalled();
    });
  });

  test('hide should set element display property to "none"', () => {
    const block = new TestBlock({});

    expect(block.getContent().style.display).toBe('');

    block.hide();

    expect(block.getContent().style.display).toBe('none');
  });

  test('show should set element display property to "block"', () => {
    const block = new TestBlock({});

    expect(block.getContent().style.display).toBe('');

    block.show();

    expect(block.getContent().style.display).toBe('block');
  });
});
