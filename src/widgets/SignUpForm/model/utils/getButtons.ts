import { Button } from '@/shared/ui';
import { Block } from '@/shared/render';
import { BUTTONS } from '../constants';

export const getButtons = (): Block[] => {
  const creatAccountButton = new Button({
    title: BUTTONS.creatAccountButton,
    kind: 'primary',
    type: 'submit',
  });

  const logInButton = new Button({
    title: BUTTONS.logInButton,
    kind: 'secondary',
    type: 'button',
  });

  return [creatAccountButton, logInButton];
};
