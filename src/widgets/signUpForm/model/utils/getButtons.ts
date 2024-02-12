import { button } from '@/shared/ui';
import { BUTTONS } from '../constants';

export const getButtons = (): THtml[] => {
  const logInButton = button({
    title: BUTTONS.logInButton,
    kind: 'primary',
    type: 'button',
  });

  const creatAccountButton = button({
    title: BUTTONS.creatAccountButton,
    kind: 'secondary',
    type: 'button',
  });

  return [logInButton, creatAccountButton];
};
