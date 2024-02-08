import Handlebars from 'handlebars';

export const compile = (template: string): HandlebarsTemplateDelegate =>
  Handlebars.compile(template);
