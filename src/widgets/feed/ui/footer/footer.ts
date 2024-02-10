import { compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import tmpl from './footer.hbs?raw';
import classes from './footer.module.scss';

export const footer = (): THtml => {
  const addFileButton = icon({ icon: EIcons.ClipIcon, iconClass: classes.icon });

  const messageInput = 'messageInput';

  const sendButton = icon({ icon: EIcons.ArrowIcon, iconClass: classes.icon });

  return compile(tmpl)({
    addFileButton,
    messageInput,
    sendButton,
    classes,
  });
};
