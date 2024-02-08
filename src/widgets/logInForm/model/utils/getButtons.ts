import { button } from '@/shared/ui';
import { BUTTONS } from '../constants';

export const getButtons = (): THtml[] => {
  const logInButton = button({
    title: BUTTONS.logInButton,
    isPrimary: true,
    type: 'button',
  });

  const creatAccountButton = button({
    title: BUTTONS.creatAccountButton,
    isPrimary: false,
    type: 'button',
  });

  return [logInButton, creatAccountButton];
};
