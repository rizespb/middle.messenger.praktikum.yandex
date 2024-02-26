export const getFormDataEntries = (event: SubmitEvent): [string, string][] => {
  const entries = [...new FormData(event.currentTarget as HTMLFormElement).entries()] as [
    string,
    string,
  ][];

  return entries;
};
