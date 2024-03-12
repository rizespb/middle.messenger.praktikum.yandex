import { Block, IChildren } from '@/shared/render';
import { UpdatePhoto } from '@/features/UpdatePhoto';
import { connect } from '@/shared/HOC';
import { servicesUrls } from '@/shared/constants';
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
    appStore.set('isUpdateAvatarFormVisible', false);
  }

  protected getInternalChildren(): IChildren {
    const { profileMode, user } = this.props;
    const { avatar } = user || {};

    const avatarSrc = avatar ? `${servicesUrls.media}${avatar}` : null;

    const userAvatar = new UserAvatar({ imageSrc: avatarSrc });

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

    const updatePhoto = new UpdatePhoto({});

    return {
      userAvatar,
      form,
      actions,
      updatePhoto,
    };
  }

  render(): DocumentFragment {
    this.setInternalChildren();

    return this.compile(tmpl, {
      classes,
      firstName: this.props.user?.first_name,
      isViewMode: this.props.profileMode === 'view',
    });
  }
}

export const Profile = connect(ProfileClass, (state) => ({
  profileMode: state.profileMode,
  user: state.user,
}));
