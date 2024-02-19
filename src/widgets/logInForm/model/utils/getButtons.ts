import { Button } from '@/shared/ui';
import { Block } from '@/shared/render';
import { BUTTONS } from '../constants';

export const getButtons = (): Block[] => {
  const logInButton = new Button({
    title: BUTTONS.logInButton,
    type: 'button',
    kind: 'primary',
  });

  const creatAccountButton = new Button({
    title: BUTTONS.creatAccountButton,
    type: 'button',
    kind: 'secondary',
  });

  return [logInButton, creatAccountButton];
};
