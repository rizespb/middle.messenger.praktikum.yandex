import { compile } from '@/shared/utils';
import tmpl from './interactiveInput.hbs?raw';
import classes from './interactiveInput.module.scss';
import { IInteractiveInputProps } from './interactiveInput.interfaces';

export const interactiveInput = (props: IInteractiveInputProps): THtml => {
  console.log(props);

  return compile(tmpl)({
    ...props,
    classes,
  });
};
