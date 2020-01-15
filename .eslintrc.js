module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'get-off-my-lawn',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    // Disable typescript conflicts
    '@typescript-eslint/explicit-function-return-type': 0,

    // Disable react conflicts
    'react/jsx-filename-extension': [0, { extensions: ['.tsx'] }],

    // Enable sorter
    'simple-import-sort/sort': 'error',
    'sort-imports': 0,
    'import/order': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
