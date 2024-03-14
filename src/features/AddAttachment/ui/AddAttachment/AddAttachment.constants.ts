import { EIcons } from '@/shared/types';
import { IActionData } from '@/shared/ui';
import classes from './AddAttachment.module.scss';

export const actionsData: IActionData[] = [
  {
    text: 'Фото или Видео',
    icon: EIcons.MediaIcon,
    iconClass: classes.icon,
    onClick: (): void => {
      console.log('Clicked');
    },
  },
  {
    text: 'Файл',
    icon: EIcons.FileIcon,
    iconClass: classes.icon,
    onClick: (): void => {
      console.log('Clicked');
    },
  },
  {
    text: 'Локация',
    icon: EIcons.LocationIcon,
    iconClass: classes.icon,
    onClick: (): void => {
      console.log('Clicked');
    },
  },
];
