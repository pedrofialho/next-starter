/** @type {import('eslint').ESLint.Options} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.ts',
    },
  },
  rules: {
    'no-duplicate-imports': 'warn',
    'tailwindcss/classnames-order': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'ignore',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next/font/*',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/*',
            group: 'internal',
          },
          {
            pattern: '@*/*',
            group: 'external',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'clsx',
        message: 'Use `cn` instead.',
      },
      {
        name: 'tailwind-merge',
        message: 'Use `cn` instead.',
      },
    ],
  },
}
