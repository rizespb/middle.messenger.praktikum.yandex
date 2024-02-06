import Handlebars from 'handlebars';

export const compile = <T extends Record<PropertyKey, unknown>>(template: string, options?: T) => {
  const templateDelegate = Handlebars.compile(template);

  const result = templateDelegate(options);

  return result;
};
