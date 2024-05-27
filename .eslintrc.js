const config = {
  extends: ['next/core-web-vitals', 'plugin:react-hooks/recommended'],
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
      },
    ],
  },
};

export default config;
