import { compile } from '@/shared/utils';
import tmpl from './chatsSearch.hbs?raw';
import classes from './chatsSearch.module.scss';
import { SEARCH_INPUT_ID, inputData } from './chatsSearch.constants';

export const chatsSearch = (): THtml =>
  compile(tmpl)({
    classes,
    title: inputData.title,
    name: inputData.name,
    id: SEARCH_INPUT_ID,
  });
