import { compile } from '@/utils';
import { buttonTmpl } from '@/components';
import { TEXTS } from './logInPage.constants';
import classes from './logInPage.module.scss';

const button = compile(buttonTmpl);

export const logInPageTmpl = `<h1 class=${classes.header}>Hello, {{userName}}!</h1>
<h2>${TEXTS.compliment}</h2>

<h3>${TEXTS.description}</h3>

${button}
`;