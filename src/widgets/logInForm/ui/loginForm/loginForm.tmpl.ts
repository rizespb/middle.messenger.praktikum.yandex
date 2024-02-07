import { authorizationFormTmpl, authInputTmpl } from '@/shared/ui';
import Handlebars from 'handlebars';
import { TEXTS } from './loginForm.constants';

Handlebars.registerPartial('authorizationFormTmpl', authorizationFormTmpl);
Handlebars.registerPartial('authInputTmpl', authInputTmpl);

const { login, password } = TEXTS.inputs;

export const loginFormTmpl = `
{{#> authorizationFormTmpl title='${TEXTS.title}' primaryButton='${TEXTS.primaryButton}' secondaryButton='${TEXTS.secondaryButton}' }}
		
	{{> authInputTmpl title='${login.title}' name='${login.name}' label='${login.title}' error='Some error'}}

	{{> authInputTmpl title='${password.title}' name='${password.name}' label='${login.title}' isPassword=true }}

{{/authorizationFormTmpl}}
`;
