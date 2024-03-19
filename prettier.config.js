const options = {
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  parser: 'typescript',
  semi: true,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs', '.html'],
      options: {
        parser: 'flow',
      },
    },

    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },

    {
      files: ['*.json', '*.jsonc', '.babelrc', '.prettierrc', '.eslintrc'],
      options: {
        parser: 'json',
      },
    },
  ],
};

export default options;
