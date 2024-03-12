import { Block, IChildren } from '@/shared/render';
import { Icon, Loader, SnackBar } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { Profile } from '@/widgets/Profile';
import { router } from '@/entities/Router';
import { EPagesUrls } from '@/shared/constants';
import { connect } from '@/shared/HOC';
import tmpl from './ProfilePage.hbs?raw';
import classes from './ProfilePage.module.scss';

class ProfilePageClass extends Block {
  protected getInternalChildren(): IChildren {
    const goBackIcon = new Icon({
      icon: EIcons.ArrowIcon,
      iconClass: classes.icon,
      events: {
        click: (): void => {
          router.go(EPagesUrls.ChatsPage);
        },
      },
    });

    const content = new Profile({});
    const loader = new Loader({});
    const snackBar = new SnackBar({});

    return {
      goBackIcon,
      content,
      loader,
      snackBar,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}

export const ProfilePage = connect(ProfilePageClass, (state) => ({
  isLoading: state.isLoading,
}));
