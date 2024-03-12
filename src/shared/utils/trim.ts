export const trim = (str: string, charsToReplace?: string): string => {
  if (charsToReplace === undefined) {
    return str.trim();
  }

  const regex = new RegExp(`^[${charsToReplace}]+|[${charsToReplace}]+$`, 'g');

  return str.replace(regex, '');
};
