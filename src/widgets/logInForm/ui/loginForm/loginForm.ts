import { authorizationForm, IAuthorizationFormProps } from '@/shared/ui';
import { TEXTS } from './loginForm.constants';
import { getButtons, getInputs } from '../../model';

const inputs = getInputs();

const buttons = getButtons();

const authorizationFormProps: IAuthorizationFormProps = {
  buttons,
  title: TEXTS.title,
  inputs,
};

export const loginForm = (): THtml => authorizationForm(authorizationFormProps);
