import { authorizationFormTmpl, authInputTmpl } from '@/shared/ui';
import Handlebars from 'handlebars';
import { TEXTS } from './signUpForm.constants';

Handlebars.registerPartial('authorizationFormTmpl', authorizationFormTmpl);
Handlebars.registerPartial('authInputTmpl', authInputTmpl);

const { email, login, firtsName, lastName, phone, password, passwordRepeat } = TEXTS.inputs;

export const signUpFormTmpl = `
{{#> authorizationFormTmpl title='${TEXTS.title}' primaryButton='${TEXTS.primaryButton}' secondaryButton='${TEXTS.secondaryButton}' }}
		
	{{> authInputTmpl title='${email.title}' name='${email.name}' label='${email.title}' }}

	{{> authInputTmpl title='${login.title}' name='${login.name}' label='${login.title}' error='Some error'}}
	
	{{> authInputTmpl title='${firtsName.title}' name='${firtsName.name}' label='${firtsName.title}' error='Some error'}}

	{{> authInputTmpl title='${lastName.title}' name='${lastName.name}' label='${lastName.title}' error='Some error'}}

	{{> authInputTmpl title='${phone.title}' name='${phone.name}' label='${phone.title}' error='Some error'}}

	{{> authInputTmpl title='${passwordRepeat.title}' name='${password.name}' label='${passwordRepeat.title}' type='password' }}

	{{> authInputTmpl title='${passwordRepeat.title}' name='${passwordRepeat.name}' label='${passwordRepeat.title}' type='password' }}

{{/authorizationFormTmpl}}
`;
