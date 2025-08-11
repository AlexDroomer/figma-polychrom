import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import boundaries from 'eslint-plugin-boundaries';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
// import pluginPromise from 'eslint-plugin-promise';
import svelte from 'eslint-plugin-svelte';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
// import love from 'eslint-config-love';
import ts from 'typescript-eslint';

import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  // {
  //   ...love,
  //   files: ['**/*.ts', '**/*.svelte'],
  //   rules: { ...love.rules, '@typescript-eslint/no-magic-numbers': 'off' },
  // },
  prettier,
  ...svelte.configs.prettier,
  perfectionist.configs['recommended-alphabetical'],
  // pluginPromise.configs['flat/recommended'],
  {
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],
    settings: {
      'import/resolver': {
        alias: [
          ['~api', './src/api'],
          ['~ui', './src/ui'],
          ['~utils', './src/utils'],
          ['~types', './src/types'],
          ['~test-utils', './src/test-utils'],
        ],
      },
    },
  },
  {
    plugins: {
      boundaries,
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          rules: [
            {
              allow: ['types', 'utils', 'api'],
              from: 'api',
            },
            {
              allow: ['types', 'utils', 'ui'],
              from: 'ui',
            },
            {
              allow: ['types', 'utils'],
              from: 'utils',
            },
          ],
        },
      ],
    },
    settings: {
      'boundaries/elements': [
        {
          pattern: 'src/api/*',
          type: 'api',
        },
        {
          pattern: 'src/ui/*',
          type: 'ui',
        },
        {
          pattern: 'src/utils/*',
          type: 'utils',
        },
        {
          pattern: 'src/types/*',
          type: 'types',
        },
        {
          pattern: 'src/test-utils/*',
          type: 'test-utils',
        },
      ],
    },
  },
  {},
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'func-style': ['error', 'expression'],
      // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        projectService: true,
        svelteConfig,
      },
    },
  },
  globalIgnores([
    '**/dist/',
    '**/postcss.config.js',
    '**/tailwind.config.js',
    '**/vite.config.ui.ts',
    '**/vite.config.api.ts',
  ])
);
