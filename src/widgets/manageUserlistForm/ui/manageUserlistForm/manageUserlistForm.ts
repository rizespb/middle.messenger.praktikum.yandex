import { Block, IChildren } from '@/shared/render';
import { BaseInput, Button } from '@/shared/ui';
import tmpl from './ManageUserlistForm.hbs?raw';
import classes from './ManageUserlistForm.module.scss';
import { IManageUserlistFormProps } from './ManageUserlistForm.interfaces';
import { loginInput } from './ManageUserlistForm.constants';

export class ManageUserlistForm extends Block<IManageUserlistFormProps> {
  protected getInternalChildren(): IChildren {
    const input = new BaseInput({
      label: loginInput.label,
      name: loginInput.name,
      placeholder: loginInput.label,
    });

    const button = new Button({
      title: this.props.buttonTitle,
      type: 'submit',
      kind: 'primary',
    });

    return {
      input,
      button,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
