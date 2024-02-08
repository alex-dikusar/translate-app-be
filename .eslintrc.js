const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/no-shadow': 'off',
      },
    },
    {
      files: ['**/*.spec.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', prettierOptions],
    'no-console': 'off',
    'no-empty-function': 'off',
    'no-shadow': 'off',
    'no-useless-constructor': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        paths: ['.'],
      },
    },
  },
};
