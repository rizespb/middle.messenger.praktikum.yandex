import { Block, IChildren } from '@/shared/render';
import { UpdatePhoto } from '@/features/UpdatePhoto';
import { UserAvatar } from '../UserAvatar';
import { Form } from '../Form';
import tmpl from './Profile.hbs?raw';
import classes from './Profile.module.scss';
import { Actions } from '../Actions';

const isEditMode = true;
const isUpdatePhotoFormVisible = false;

export class Profile extends Block {
  protected getInternalChildren(): IChildren {
    const userAvatar = new UserAvatar({});

    const form = new Form({
      mode: 'personalDetails',
      isEditMode,
    });

    const actions = new Actions({});

    let children: IChildren = {
      userAvatar,
      form,
      actions,
    };

    if (isUpdatePhotoFormVisible) {
      const updatePhoto = new UpdatePhoto({});

      children = { ...children, updatePhoto };
    }

    return children;
  }

  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      firstName: 'Иван',
      isViewMode: !isEditMode,
    });
  }
}
