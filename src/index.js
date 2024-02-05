import { greetingPageTmpl } from './pages';
import { compile } from './compile';
// Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  const greeting = compile(greetingPageTmpl, {
    userName: 'John Doe',
  });

  root.innerHTML = greeting;
});
