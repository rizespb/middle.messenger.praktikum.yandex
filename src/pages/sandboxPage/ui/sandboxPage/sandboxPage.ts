import { compile } from '@/shared/utils';
import tmpl from './sandboxPage.hbs?raw';
import { RENDER_BUTTON_ID, SANDBOX_ID } from './sandboxPage.constants';
import { ButtonBlock } from '../../data/ButtonBlock';

export const sandboxPage = (): THtml =>
  compile(tmpl)({
    renderButtonId: RENDER_BUTTON_ID,
    sandboxId: SANDBOX_ID,
  });

setTimeout(() => {
  document.querySelector('#renderButton')?.addEventListener('click', () => {
    const sandbox = document.querySelector(`#${SANDBOX_ID}`);
    const renderButton = document.querySelector(`#${RENDER_BUTTON_ID}`);

    if (!sandbox || !renderButton) {
      throw new Error('No sandbox was found');
    }

    const button = new ButtonBlock({
      text: 'Click me test button',
      events: {
        click: (): void => {
          console.log('button clicked');
        },
      },
    });

    // Через секунду контент изменится сам, достаточно обновить пропсы
    // setTimeout(() => {
    //   button.setProps({
    //     text: 'Changed text',
    //   });
    // }, 1000);

    sandbox.appendChild(button.getContent()!);
  });
}, 0);
