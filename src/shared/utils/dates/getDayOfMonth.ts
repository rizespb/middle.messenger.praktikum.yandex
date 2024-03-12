const MONTHES = {
  0: 'Января',
  1: 'Февраля',
  2: 'Марта',
  3: 'Апреля',
  4: 'Мая',
  5: 'Июня',
  6: 'Июля',
  7: 'Августа',
  8: 'Сентября',
  9: 'Октября',
  10: 'Ноября',
  11: 'Декабря',
};

export const getDayOfMonth = (date: Date): string => {
  const day = date.getDate();

  const month = MONTHES[date.getMonth() as keyof typeof MONTHES];

  const yearFromDate = date.getFullYear();
  const currentYear = new Date().getFullYear();

  const isSameYear = yearFromDate === currentYear;

  const year = isSameYear ? '' : ` ${yearFromDate}`;

  return `${day} ${month}${year}`;
};
