import { Block } from '@/shared/render';
import { IFileInputProps } from './FileInput.interfaces';
import tmpl from './FileInput.hbs?raw';
import classes from './FileInput.module.scss';

export class FileInput extends Block<IFileInputProps> {
  protected render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
