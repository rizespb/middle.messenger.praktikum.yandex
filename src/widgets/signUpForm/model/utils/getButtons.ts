import { Button } from '@/shared/ui';
import { Block } from '@/shared/render';
import { BUTTONS } from '../constants';

export const getButtons = (): Block[] => {
  const logInButton = new Button({
    title: BUTTONS.logInButton,
    kind: 'primary',
    type: 'button',
  });

  const creatAccountButton = new Button({
    title: BUTTONS.creatAccountButton,
    kind: 'secondary',
    type: 'button',
  });

  return [logInButton, creatAccountButton];
};
