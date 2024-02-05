import { compile } from '../../compile';
import { buttonTmpl } from '../../components';
import './greetingPage.scss';

const compliment = 'You are awesome';

const button = compile(buttonTmpl);

export const greetingPageTmpl = `<h1 class='greeting-header'>Hello, {{userName}}! ${compliment}</h1>
${button}
`;
