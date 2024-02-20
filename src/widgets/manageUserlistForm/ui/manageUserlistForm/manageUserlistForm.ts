import { compile } from '@/shared/utils';
import { baseInput, button } from '@/shared/ui';
import { Block } from '@/shared/render';
import tmpl from './ManageUserlistForm.hbs?raw';
import classes from './ManageUserlistForm.module.scss';
import { IManageUserlistFormProps } from './ManageUserlistForm.interfaces';
import { loginInput } from './ManageUserlistForm.constants';

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

export class ManageUserlistForm extends Block<IManageUserlistFormProps> {
  render(): DocumentFragment {
    return this.compile('<div>ManageUserlistForm</div>', { classes });
  }
}
