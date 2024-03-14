import { getDayOfMonth, getHoursAndMinutes, isValidDate } from '@/shared/utils';

const isToday = (date: Date): boolean => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return day === currentDay && month === currentMonth && year === currentYear;
};

export const getPreviewDate = (dateStr: string): string | null => {
  const date = new Date(dateStr);

  if (!isValidDate) {
    return null;
  }

  if (isToday(date)) {
    return getHoursAndMinutes(date);
  }

  return getDayOfMonth(date);
};
