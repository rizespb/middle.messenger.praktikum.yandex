import classes from './button.module.scss';

export const buttonTmpl = `
{{#if isPrimary}}
	<button class='${classes.button} ${classes.buttonPrimary}' type={{ type }}>
		{{ title }}
	</button>
{{else}}
	<button class='${classes.button} ${classes.buttonSecondary}' type={{ type }}>
		{{ title }}
	</button>
{{/if}}
`;
