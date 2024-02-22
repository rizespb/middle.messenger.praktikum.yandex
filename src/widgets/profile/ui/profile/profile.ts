import { Block, IChildren } from '@/shared/render';
import { Button, InteractiveInput } from '@/shared/ui';
import { UpdatePhoto } from '@/features/UpdatePhoto';
import { profileInputsData, changePasswordInputsData } from '../../model';
import { TEXTS } from './Profile.constants';
import tmpl from './Profile.hbs?raw';
import classes from './Profile.module.scss';
import { UserAvatar } from '../UserAvatar';
import { Actions } from '../Actions';

const isChangePasswordMode = false;
const isUpdateFormVisible = false;
const isEditMode = false;

export class Profile extends Block {
  protected getInternalChildren(): IChildren {
    const userAvatar = new UserAvatar({});

    const inputsData = isChangePasswordMode ? changePasswordInputsData : profileInputsData;

    const inputs = inputsData.map((input) => {
      const { name, title, type } = input;

      return new InteractiveInput({
        label: title,
        name,
        placeholder: title,
        isDisabled: !isEditMode,
        type,
      });
    });

    const submitButton = new Button({
      title: TEXTS.submitButton,
      type: 'submit',
      className: classes.submitButtom,
      kind: 'primary',
    });

    const actions = new Actions({});

    let children: IChildren = {
      userAvatar,
      inputs,
      submitButton,
      actions,
    };

    if (isUpdateFormVisible) {
      const updatePhoto = new UpdatePhoto({});

      children = { ...children, updatePhoto };
    }

    return children;
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      isEditMode,
      firstName: 'Иван',
    });
  }
}
