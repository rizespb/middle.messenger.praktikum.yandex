import { NAV_ITEM_ID_PREFIX, PAGE_CODE_ATTR } from './navigation.constants';
import classes from './navigation.module.scss';

// Временная реализация навигации
export const navigationTmpl = `
<nav class=${classes.navigation}>
	{{#each pagesMap}}
		<li id=${NAV_ITEM_ID_PREFIX}{{code}} ${PAGE_CODE_ATTR}={{code}} class=${classes.navigationItem}>{{title}}</li>
	{{/each}}
</nav>
`;
