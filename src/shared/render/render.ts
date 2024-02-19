import { Block } from './Block';

export const render = (query: string, block: Block): Node => {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('Root not found');
  }

  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
};
