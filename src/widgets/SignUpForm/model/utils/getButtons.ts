import { Button } from '@/shared/ui';
import { Block } from '@/shared/render';
import { Link } from '@/entities/Router';
import { BUTTONS } from '../constants';

export const getButtons = (): Block[] => {
  const creatAccountButton = new Button({
    title: BUTTONS.creatAccountButton,
    kind: 'primary',
    type: 'submit',
  });

  const loginLink = new Link({
    text: BUTTONS.loginLink.text,
    href: BUTTONS.loginLink.href,
  });

  return [creatAccountButton, loginLink];
};
