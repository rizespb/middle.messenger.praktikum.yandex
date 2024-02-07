import Handlebars from 'handlebars';
import { errorPageLayoutTmpl } from '@/layouts/errorPageLayout';
import { TEXTS } from './error404Page.constants';

Handlebars.registerPartial('errorPageLayoutTmpl', errorPageLayoutTmpl);

export const error404PageTmpl = `
	{{> errorPageLayoutTmpl title='${TEXTS.title}' description='${TEXTS.description}' }}
`;
