import { compile } from '@/shared/utils';
import { baseInput, button } from '@/shared/ui';
import tmpl from './manageUserlistForm.hbs?raw';
import classes from './manageUserlistForm.module.scss';
import { IManageUserlistFormProps } from './manageUserlistForm.interfaces';
import { loginInput } from './manageUserlistForm.constants';

export const manageUserlistForm = (props: IManageUserlistFormProps): THtml => {
  const { buttonTitle } = props;

  const inputStr = baseInput({
    label: loginInput.label,
    name: loginInput.name,
    placeholder: loginInput.label,
  });

  const buttonStr = button({
    title: buttonTitle,
    type: 'submit',
    kind: 'primary',
  });

  return compile(tmpl)({
    classes,
    button: buttonStr,
    input: inputStr,
  });
};
