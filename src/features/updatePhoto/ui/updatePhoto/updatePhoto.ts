import { button, modalWindow } from '@/shared/ui';
import { compile } from '@/shared/utils';
import { TEXTS, ACCEPT_FILES, UPLOAD_INPUT_NAME } from './updatePhoto.constants';
import tmpl from './updatePhoto.hbs?raw';
import classes from './updatePhoto.module.scss';

export const updatePhoto = (): THtml => {
  // @TODO временно
  const isError = true;

  const submitButton = button({
    kind: 'primary',
    title: TEXTS.button,
    type: 'submit',
  });

  const form = compile(tmpl)({
    classes,
    ACCEPT_FILES,
    submitButton,
    error: isError ? TEXTS.error : undefined,
    name: UPLOAD_INPUT_NAME,
    label: TEXTS.label,
  });

  return modalWindow({
    title: TEXTS.title.uploadPlease,
    content: form,
    titleColor: isError ? 'error' : 'primary',
  });
};
