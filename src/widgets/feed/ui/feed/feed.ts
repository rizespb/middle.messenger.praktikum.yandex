import { compile } from '@/shared/utils';
import { avatar, modalWindow } from '@/shared/ui';

import { manageUserlistForm } from '@/widgets/manageUserlistForm';
import classes from './feed.module.scss';
import tmpl from './feed.hbs?raw';
import { showActionsButton } from '../showActionsButton';

export const feed = (): THtml => {
  const isModalVisible = true;

  const headingImage = avatar({ size: 'small' });

  const modal = modalWindow({
    content: manageUserlistForm({ buttonTitle: 'удалить' }),
    title: 'Удалить пользователя',
  });

  return compile(tmpl)({
    classes,
    headingImage,
    showActionsButton: showActionsButton(),
    title: 'СупердискотЭка',
    modalWindow: isModalVisible ? modal : undefined,
  });
};
