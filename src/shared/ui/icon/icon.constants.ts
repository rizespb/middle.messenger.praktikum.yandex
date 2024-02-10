import { EIcons } from '@/shared/types';
import {
  plusIconTmpl,
  showMoreIconTmpl,
  arrowIconTmpl,
  clipIconTmpl,
  fileIconTmpl,
  mediaIconTmpl,
  locationIconTmpl,
} from './templates';

export const iconsMap: Record<EIcons, string> = {
  [EIcons.ShowMore]: showMoreIconTmpl,
  [EIcons.PlusIcon]: plusIconTmpl,
  [EIcons.ArrowIcon]: arrowIconTmpl,
  [EIcons.ClipIcon]: clipIconTmpl,
  [EIcons.FileIcon]: fileIconTmpl,
  [EIcons.MediaIcon]: mediaIconTmpl,
  [EIcons.LocationIcon]: locationIconTmpl,
};
