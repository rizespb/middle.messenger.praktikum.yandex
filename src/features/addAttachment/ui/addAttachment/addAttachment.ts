// import { compile } from '@/shared/utils';
// import { icon } from '@/shared/ui';
// import { EIcons } from '@/shared/types';
// import { popup } from '@/shared/ui/';
import { Block } from '@/shared/render';
// import tmpl from './AddAttachment.hbs?raw';
import classes from './AddAttachment.module.scss';
// import { TEXTS } from './AddAttachment.constants';

// export const addAttachment = (): THtml => {
//   const isPopupOpened = false;

//   const addFileIcon = icon({ icon: EIcons.ClipIcon, iconClass: classes.icon });

//   const actions = [
//     {
//       text: TEXTS.media,
//       icon: icon({ icon: EIcons.MediaIcon, iconClass: classes.icon }),
//     },
//     {
//       text: TEXTS.file,
//       icon: icon({ icon: EIcons.FileIcon, iconClass: classes.icon }),
//     },
//     {
//       text: TEXTS.location,
//       icon: icon({ icon: EIcons.LocationIcon, iconClass: classes.icon }),
//     },
//   ];

//   const popupStr = popup({
//     actions,
//     direction: 'topLeft',
//   });

//   return compile(tmpl)({
//     addFileIcon,
//     classes,
//     popup: isPopupOpened ? popupStr : undefined,
//   });
// };

export class AddAttachment extends Block {
  render(): DocumentFragment {
    return this.compile('<div>AddAttachment</div>', { classes });
  }
}
