import { greetingPageTmpl } from '@/pages';
import { compile } from './compile';

// Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (!root) {
    throw new Error('root not found');
  }

  const greeting = compile(greetingPageTmpl, {
    userName: 'John Doe',
  });

  root.innerHTML = greeting;
});
