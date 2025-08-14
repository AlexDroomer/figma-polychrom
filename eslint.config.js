import loguxSvelteConfig from '@logux/eslint-config/svelte';
import boundaries from 'eslint-plugin-boundaries';
import svelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: [
      'dist/',
      'postcss.config.js',
      'tailwind.config.js',
      'vite.config.ui.ts',
      'vite.config.api.ts',
    ],
  },
  ...loguxSvelteConfig,
  prettier,
  ...svelte.configs.prettier,
  ...tailwind.configs['flat/recommended'],

  {
    plugins: {
      boundaries,
      prettier
    },
    rules: {
      'no-void': 'off',
      'svelte/no-unused-class-name': 'off',
      'func-style': ['error', 'expression'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
        },
      ],
      'prefer-let/prefer-let': 'off',
      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          rules: [
            {
              from: 'api',
              allow: ['types', 'utils', 'api'],
            },
            {
              from: 'ui',
              allow: ['types', 'utils', 'ui'],
            },
            {
              from: 'utils',
              allow: ['types', 'utils'],
            },
          ],
        },
      ],
    },
    settings: {
      tailwindcss: {
        whitelist: ['segmented-'],
      },
      'boundaries/elements': [
        {
          type: 'api',
          pattern: 'src/api/*',
        },
        {
          type: 'ui',
          pattern: 'src/ui/*',
        },
        {
          type: 'utils',
          pattern: 'src/utils/*',
        },
        {
          type: 'types',
          pattern: 'src/types/*',
        },
        {
          type: 'test-utils',
          pattern: 'src/test-utils/*',
        },
      ],
    },
  },
  {
    files: ['./**/**.spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
    },
  }
);
