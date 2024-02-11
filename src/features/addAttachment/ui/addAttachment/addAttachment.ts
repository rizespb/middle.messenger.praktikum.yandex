import { compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import { popup } from '@/shared/ui/popup';
import tmpl from './addAttachment.hbs?raw';
import classes from './addAttachment.module.scss';
import { TEXTS } from './addAttachment.constants';

export const addAttachment = (): THtml => {
  const isPopupOpened = false;

  const addFileIcon = icon({ icon: EIcons.ClipIcon, iconClass: classes.icon });

  const actions = [
    {
      text: TEXTS.media,
      icon: icon({ icon: EIcons.MediaIcon, iconClass: classes.icon }),
    },
    {
      text: TEXTS.file,
      icon: icon({ icon: EIcons.FileIcon, iconClass: classes.icon }),
    },
    {
      text: TEXTS.location,
      icon: icon({ icon: EIcons.LocationIcon, iconClass: classes.icon }),
    },
  ];

  const popupStr = popup({
    actions,
    direction: 'topLeft',
  });

  return compile(tmpl)({
    addFileIcon,
    classes,
    popup: isPopupOpened ? popupStr : undefined,
  });
};
