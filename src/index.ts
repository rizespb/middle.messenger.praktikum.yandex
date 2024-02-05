import { logInPageTmpl } from '@/pages';
import { compile } from '@/utils';

// Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (!root) {
    throw new Error('root not found');
  }

  const greeting = compile(logInPageTmpl, {
    userName: 'John Doe',
  });

  root.innerHTML = greeting;
});
