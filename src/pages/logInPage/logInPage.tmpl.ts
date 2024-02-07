import Handlebars from 'handlebars';
import { loginFormTmpl } from '@/widgets/logInForm';
import { centerContentLayoutTmpl } from '@/layouts/centerContentLayout';

Handlebars.registerPartial('centerContentLayoutTmpl', centerContentLayoutTmpl);
Handlebars.registerPartial('loginFormTmpl', loginFormTmpl);

export const logInPageTmpl = `
{{#> centerContentLayoutTmpl }}
	{{> loginFormTmpl}}
{{/centerContentLayoutTmpl}}
`;
