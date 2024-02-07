import Handlebars from 'handlebars';
import { errorPageLayoutTmpl } from '@/layouts/errorPageLayout';
import { TEXTS } from './error500Page.constants';

Handlebars.registerPartial('errorPageLayoutTmpl', errorPageLayoutTmpl);

export const error500PageTmpl = `
	{{> errorPageLayoutTmpl title='${TEXTS.title}' description='${TEXTS.description}' }}
`;
