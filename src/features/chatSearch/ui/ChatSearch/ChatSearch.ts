import { Block } from '@/shared/render';
import tmpl from './ChatSearch.hbs?raw';
import classes from './ChatSearch.module.scss';
import { SEARCH_INPUT_ID, inputData } from './ChatSearch.constants';

export class ChatSearch extends Block {
  render(): DocumentFragment {
    return this.compile(tmpl, {
      classes,
      title: inputData.title,
      name: inputData.name,
      id: SEARCH_INPUT_ID,
    });
  }
}
