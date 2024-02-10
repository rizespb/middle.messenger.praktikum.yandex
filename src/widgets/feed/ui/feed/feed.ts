import { compile } from '@/shared/utils';
import { avatar, modalWindow } from '@/shared/ui';

import { manageUserlistForm } from '@/widgets/manageUserlistForm';
import classes from './feed.module.scss';
import tmpl from './feed.hbs?raw';
import { showActionsButton } from '../showActionsButton';

export const feed = (): THtml => {
  const headingImage = avatar({ size: 'small' });

  return compile(tmpl)({
    classes,
    headingImage,
    showActionsButton: showActionsButton(),
    title: 'СупердискотЭка',
  });
};
