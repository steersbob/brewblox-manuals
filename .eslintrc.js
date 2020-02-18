module.exports = {
  'root': true,
  'env': {
    'node': true,
  },
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'ecmaVersion': 2018,
  },
  'extends': [
    'plugin:vue/recommended',
  ],
  'plugins': [
    'simple-import-sort',
  ],
  'rules': {
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/first': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'off',
    'vue/html-self-closing': 'off',
    'no-multiple-empty-lines': 'error',
    'semi': 'error',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
      },
    ],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 8,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      },
    }],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'max-len': [
      1,
      120,
      2,
      {
        'ignoreUrls': true,
        'ignoreComments': false,
      },
    ],
  },
};
