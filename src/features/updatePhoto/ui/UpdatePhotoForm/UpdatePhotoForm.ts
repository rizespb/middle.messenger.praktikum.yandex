import { Block, IBlockProps, IChildren } from '@/shared/render';
import { Button } from '@/shared/ui';
import classes from './UpdatePhotoForm.module.scss';
import tmpl from './UpdatePhotoForm.hbs?raw';
import { TEXTS, UPLOAD_INPUT_NAME, ACCEPT_FILES } from './UpdatePhotoForm.constants';

const isError = true;

export class UpdatePhotoForm extends Block {
  protected getInternalChildren(): IChildren<Block<IBlockProps>> {
    const submitButton = new Button({
      kind: 'primary',
      title: TEXTS.button,
      type: 'submit',
    });

    return {
      submitButton,
    };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      ACCEPT_FILES,
      name: UPLOAD_INPUT_NAME,
      label: TEXTS.label,
      error: isError ? TEXTS.error : undefined,
    });
  }
}
