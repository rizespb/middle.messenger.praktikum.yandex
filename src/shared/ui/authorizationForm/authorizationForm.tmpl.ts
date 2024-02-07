import Handlebars from 'handlebars';
import classes from './authorizationForm.module.scss';
import { buttonTmpl } from '../button';

Handlebars.registerPartial('buttonTmpl', buttonTmpl);

export const authorizationFormTmpl = `
	<section class=${classes.container}>
		<h3 class=${classes.header}>{{ title }}</h3>

		<form class=${classes.form}>
			<div class=${classes.inputs}>
				{{> @partial-block }}
			</div>

			<div class=${classes.buttons}>
				{{> buttonTmpl title=primaryButton isPrimary=true type='submit'}}

				{{> buttonTmpl title=secondaryButton type='button'}}
			</div>
		</form>
	</section>
`;
