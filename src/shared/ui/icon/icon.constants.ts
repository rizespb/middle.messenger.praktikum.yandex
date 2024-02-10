import { EIcons } from '@/shared/types';
import { plusIconTmpl, showMoreIconTmpl } from './templates';

export const iconsMap: Record<EIcons, string> = {
  [EIcons.ShowMore]: showMoreIconTmpl,
  [EIcons.PlusIcon]: plusIconTmpl,
};
