import { Button } from '@/shared/ui';
import { Block } from '@/shared/render';
import { Link } from '@/entities/Router';
import { BUTTONS } from '../constants';

export const getButtons = (): Block[] => {
  const logInButton = new Button({
    title: BUTTONS.logInButton,
    type: 'submit',
    kind: 'primary',
  });

  const signUpLink = new Link({
    text: BUTTONS.signUpLink.text,
    href: BUTTONS.signUpLink.href,
  });

  return [logInButton, signUpLink];
};
