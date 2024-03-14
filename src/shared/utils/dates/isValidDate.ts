export const isValidDate = (date: unknown): date is Date =>
  date instanceof Date && Number.isFinite(date.valueOf());
