import Handlebars from 'handlebars';
import { signUpFormTmpl } from '@/widgets/signUpForm';
import { centerContentLayoutTmpl } from '@/layouts/centerContentLayout';

Handlebars.registerPartial('centerContentLayoutTmpl', centerContentLayoutTmpl);
Handlebars.registerPartial('signUpFormTmpl', signUpFormTmpl);

export const signUpPageTmpl = `
{{#> centerContentLayoutTmpl }}
	{{> signUpFormTmpl}}
{{/centerContentLayoutTmpl}}
`;
