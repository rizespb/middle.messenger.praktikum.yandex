import { Block } from '@/shared/render';
import classes from './AuthorizationForm.module.scss';
import tmpl from './AuthorizationForm.hbs?raw';
import { IAuthorizationFormProps } from './AuthorizationForm.interfaces';

export class AuthorizationForm extends Block<IAuthorizationFormProps> {
  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
