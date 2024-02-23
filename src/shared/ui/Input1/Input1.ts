import { Block } from '@/shared/render';
import { IInputProps } from './Input.interfaces';
import tmpl from './Input.hbs?raw';

export class Input extends Block<IInputProps> {
  protected render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
