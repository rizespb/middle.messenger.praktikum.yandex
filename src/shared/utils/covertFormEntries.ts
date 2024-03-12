export const covertFormEntries = (entries: [string, string][]): Record<string, string> => {
  const data = entries.reduce<Record<string, string>>((acc, [name, value]) => {
    acc[name] = value;

    return acc;
  }, {});

  return data;
};
