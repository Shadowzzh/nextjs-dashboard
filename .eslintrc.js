module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
      },
    ],
  },
};
