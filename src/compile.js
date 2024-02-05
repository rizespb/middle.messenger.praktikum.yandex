import Handlebars from 'handlebars';

export const compile = (template, options) => {
  const templateDelegate = Handlebars.compile(template);

  const result = templateDelegate(options);

  return result;
};
