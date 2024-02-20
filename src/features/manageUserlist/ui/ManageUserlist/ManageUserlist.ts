import { classNames, compile } from '@/shared/utils';
import { Icon, ModalWindow, Popup } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { manageUserlistForm } from '@/widgets/ManageUserlistForm';
import { Block, IBlockProps, IChildren } from '@/shared/render';
import { TEXTS } from './ManageUserlist.constants';
import tmpl from './ManageUserlist.hbs?raw';
import classes from './ManageUserlist.module.scss';

// // // // export const manageUserlist = (): THtml => {
// // // //   const isPopupOpened = false;
// // // //   const isModalVisible = false;

// // // //   const showMoreIcon = icon({
// // // //     icon: EIcons.ShowMore,
// // // //     iconClass: classNames({
// // // //       [classes.showMoreIcon]: true,
// // // //       [classes.showMoreIcon__active]: isPopupOpened,
// // // //     }),
// // // //     containerClass: classNames({
// // // //       [classes.showMoreIconContainer]: true,
// // // //       [classes.showMoreIconContainer__active]: isPopupOpened,
// // // //     }),
// // // //   });

//   const addUserIcon = icon({
//     icon: EIcons.PlusIcon,
//     iconClass: classes.plusIcon,
//     containerClass: classes.plusIconContainer,
//   });

//   const deleteUserIcon = icon({
//     icon: EIcons.PlusIcon,
//     iconClass: classNames([classes.plusIcon, classes.plusIcon__rotated]),
//     containerClass: classes.plusIconContainer,
//   });

//   const modal = modalWindow({
//     content: manageUserlistForm({ buttonTitle: 'Удалить' }),
//     title: 'Удалить пользователя',
//   });

// // // //   const actions = [
// // // //     {
// // // //       text: TEXTS.addUser,
// // // //       icon: addUserIcon,
// // // //     },
// // // //     {
// // // //       text: TEXTS.deleteUser,
// // // //       icon: deleteUserIcon,
// // // //     },
// // // //   ];

// // // //   const popupStr = popup({
// // // //     actions,
// // // //     direction: 'bottomRight',
// // // //   });

//   return compile(tmpl)({
//     addUser: {
//       text: TEXTS.addUser,
//       icon: addUserIcon,
//     },
//     deleteUser: {
//       text: TEXTS.deleteUser,
//       icon: deleteUserIcon,
//     },
//     deleteUserText: TEXTS.deleteUser,
//     showMoreIcon,
//     popup: isPopupOpened ? popupStr : undefined,
//     classes,
//     modalWindow: isModalVisible ? modal : undefined,
//   });
// };

export class ManageUserlist extends Block {
  protected getInternalChildren(): IChildren<Block> {
    const isPopupOpened = true;
    const isModalVisible = false;

    const showMoreIcon = new Icon({
      icon: EIcons.ShowMore,
      iconClass: classNames({
        [classes.showMoreIcon]: true,
        [classes.showMoreIcon__active]: isPopupOpened,
      }),
      containerClass: classNames({
        [classes.showMoreIconContainer]: true,
        [classes.showMoreIconContainer__active]: isPopupOpened,
      }),
    });

    const addUserIcon = new Icon({
      icon: EIcons.PlusIcon,
      iconClass: classes.plusIcon,
      containerClass: classes.plusIconContainer,
    });

    const deleteUserIcon = new Icon({
      icon: EIcons.PlusIcon,
      iconClass: classNames([classes.plusIcon, classes.plusIcon__rotated]),
      containerClass: classes.plusIconContainer,
    });

    const actions = [
      {
        text: TEXTS.addUser,
        icon: addUserIcon,
      },
      {
        text: TEXTS.deleteUser,
        icon: deleteUserIcon,
      },
    ];

    const popup = new Popup({
      actions,
      direction: 'bottomRight',
      isPopupOpened,
    });

    return {
      showMoreIcon,
      popup,
    };
  }

  render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
