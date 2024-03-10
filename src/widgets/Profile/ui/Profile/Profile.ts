import { Block, IChildren } from '@/shared/render';
// import { UpdatePhoto } from '@/features/UpdatePhoto';
import { connect } from '@/shared/HOC';
import { UserAvatar } from '../UserAvatar';
import tmpl from './Profile.hbs?raw';
import classes from './Profile.module.scss';
import { Actions } from '../Actions';
import { IProfileProps } from './Profile.interfaces';
import { PersonalDetailsForm } from '../PersonalDetailsForm';
import { UpdatePasswordForm } from '../UpdatePasswordForm';

export class ProfileClass extends Block<IProfileProps> {
  protected componentDidMount(): void {
    appStore.set('profileMode', 'view');
    appStore.set('isUpdateProfilePhotoFormVisible', false);
  }

  protected getInternalChildren(): IChildren {
    const { profileMode } = this.props;

    const userAvatar = new UserAvatar({});

    const actions = new Actions({
      changePersonalDetails: (): void => {
        appStore.set('profileMode', 'updatePersonalDetails');
      },
      changePasswrod: (): void => {
        appStore.set('profileMode', 'updatePassword');
      },
    });

    let form: Block;

    if (profileMode === 'view' || profileMode === 'updatePersonalDetails') {
      form = new PersonalDetailsForm({});
    } else {
      form = new UpdatePasswordForm({});
    }

    const children: IChildren = {
      userAvatar,
      form,
      actions,
    };

    // if (isUpdatePhotoFormVisible) {
    //   const updatePhoto = new UpdatePhoto({});

    //   children = { ...children, updatePhoto };
    // }

    return children;
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, {
      classes,
      firstName: 'Иван',
      isViewMode: this.props.profileMode === 'view',
    });
  }
}

export const Profile = connect(ProfileClass, (state) => ({
  profileMode: state.profileMode,
  isUpdatePhotoFormVisible: state.isUpdateProfilePhotoFormVisible,
}));
