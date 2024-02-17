import { compile } from '@/shared/utils';
import tmpl from './sandboxPage.hbs?raw';
import { RENDER_BUTTON_ID, SANDBOX_ID } from './sandboxPage.constants';
import { Block } from '../../model/Block';

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

    const block = new Block({
      a: 'A',
    });

    block.setProps({
      a: 'B',
    });

    console.log(block);
  });
}, 0);
