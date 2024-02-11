import { compile } from '@/shared/utils';
import { icon } from '@/shared/ui';
import { EIcons } from '@/shared/types';
import tmpl from './messageInput.hbs?raw';
import classes from './messageInput.module.scss';
import { inputData } from './messageInput.constants';

export const messageInput = (): THtml => {
  const sendButton = icon({
    icon: EIcons.ArrowIcon,
    iconClass: classes.icon,
  });

  return compile(tmpl)({
    sendButton,
    name: inputData.name,
    placeholder: inputData.placeholder,
    classes,
  });
};
