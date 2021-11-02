const { parser, parserOptions, settings, rules } = require('./eslint.config');

module.exports = {
  root: true,
  parser,
  parserOptions,
  plugins: [
    '@typescript-eslint',
    'import',
    'boundaries',
    'functional',
    'jsx-a11y',
    'react',
  ],
  extends: ['plugin:boundaries/recommended'],
  settings,
  rules: {
    'boundaries/element-types': rules['boundaries/element-types'],
  },
};
