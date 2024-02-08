import { authorizationForm, IAuthorizationFormProps } from '@/shared/ui';
import { TEXTS } from './signUpForm.constants';

import { getButtons, getInputs } from '../../model';

const inputs = getInputs();

const buttons = getButtons();

const authorizationFormProps: IAuthorizationFormProps = {
  buttons,
  title: TEXTS.title,
  inputs,
};

export const signUpForm = (): THtml => authorizationForm(authorizationFormProps);
