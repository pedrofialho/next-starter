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
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.ts',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.config.json'],
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
        'newlines-between': 'always',
        distinctGroup: false,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next/font/*',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '~/*',
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
