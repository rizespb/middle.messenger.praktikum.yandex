import { button } from '@/shared/ui';
import { BUTTONS } from '../constants';

export const getButtons = (): THtml[] => {
  const logInButton = button({
    title: BUTTONS.logInButton,
    type: 'button',
    kind: 'primary',
  });

  const creatAccountButton = button({
    title: BUTTONS.creatAccountButton,
    type: 'button',
    kind: 'secondary',
  });

  return [logInButton, creatAccountButton];
};
