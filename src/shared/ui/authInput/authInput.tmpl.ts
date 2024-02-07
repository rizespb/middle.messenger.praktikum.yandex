import classes from './authInput.module.scss';

export const authInputTmpl = `
	<div class='${classes.container}'>
		{{#if label}}
			<label class='${classes.label}' for={{ name }}>{{ title }}</label>
		{{/if}}

		<input class='${classes.input}' placeholder={{ title }} name={{ name }} type={{ type }} />

		{{#if error}}
			<span class='${classes.error}'>{{ error }}</label>
		{{/if}}
	</div>
`;
