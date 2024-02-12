import { compile } from '@/shared/utils';
import classes from './authorizationForm.module.scss';
import tmpl from './authorizationForm.hbs?raw';
import { IAuthorizationFormProps } from './authorizationForm.interfaces';

export const authorizationForm = (props: IAuthorizationFormProps): THtml =>
  compile(tmpl)({ ...props, classes });
