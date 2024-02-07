import Handlebars from 'handlebars';
import { centerContentLayoutTmpl } from '@/layouts/centerContentLayout';
import classes from './errorPageLayout.module.scss';
import { CHATS_LINK_URL, TEXTS } from './errorPageLayout.constants';

Handlebars.registerPartial('centerContentLayoutTmpl', centerContentLayoutTmpl);

export const errorPageLayoutTmpl = `
{{#> centerContentLayoutTmpl }}
	<div class='${classes.container}'>
		<h1>
			{{ title }}
		</h1>

		<p class='${classes.description}'>
			{{ description }}
		</P>

		<a class='${classes.links}' href='${CHATS_LINK_URL}'>
			${TEXTS.linkTitle}
		</a>
	</div>
{{/centerContentLayoutTmpl}}
`;
