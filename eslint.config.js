const { paths } = require('./tsconfig.json').compilerOptions;

const project = './tsconfig.ci.json';

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project,
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.mjs'],
  },
  plugins: [
    'json',
    'eslint-comments',
    '@typescript-eslint',
    'import',
    'boundaries',
    'etc',
    'array-func',
    'functional',
    'prefer-arrow',
    'react',
    'react-hooks',
    'jsx-a11y',
    'promise',
    'sonarjs',
    'unicorn',
    'regexp',
    'optimize-regex',
    'prettier',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:json/recommended',
    'plugin:eslint-comments/recommended',
    'eslint:recommended',
    'plugin:boundaries/strict',
    'plugin:etc/recommended',
    'plugin:array-func/recommended',
    'plugin:functional/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:regexp/recommended',
    'plugin:optimize-regex/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mjs'],
    },
    'import/resolver': {
      typescript: {
        project,
        alwaysTryTypes: true,
      },
      alias: {
        map: Object.entries(paths).map(([alias, [path]]) => {
          return [alias.replace(/[$*/@]/, ''), path.replace(/\/\*$/, '')];
        }),
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },
    },
    'boundaries/include': ['src/**/*'],
    'boundaries/elements': [
      {
        type: 'template',
        pattern: 'src/pages/_(app|document).ts',
        mode: 'file',
        capture: ['template'],
      },
      {
        type: 'shared',
        pattern: 'src/shared/**/*',
        mode: 'file',
      },
      {
        type: '$bootstrap',
        pattern: 'src/api/core/bootstrap.ts',
        mode: 'file',
      },
      {
        type: '$core',
        pattern: 'src/api/core/**/*',
        mode: 'file',
      },
      {
        type: '$shared',
        pattern: 'src/api/shared/**/*',
        mode: 'file',
      },
      {
        type: '$module',
        pattern: 'src/api/*/**/*',
        mode: 'file',
        capture: ['module'],
      },
      {
        type: '$page',
        pattern: 'src/pages/api/**/*',
        mode: 'file',
      },
      {
        type: '@shared',
        pattern: 'src/client/shared/**/*',
        mode: 'file',
      },
      {
        type: '@core',
        pattern: 'src/client/core/**/*',
        mode: 'file',
        capture: ['module'],
      },
      {
        type: '@module',
        pattern: 'src/client/*/**/*',
        mode: 'file',
        capture: ['module'],
      },
      {
        type: '@page',
        pattern: 'src/pages/**/*',
        mode: 'file',
        capture: ['page'],
      },
    ],
  },
  rules: {
    'newline-after-var': ['error', 'always'],
    'lines-between-class-members': 'error',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'newline-before-return': 'error',

    'eslint-comments/no-unused-disable': 'error',

    'boundaries/no-ignored': 'off',
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          /* eslint-disable no-template-curly-in-string */
          {
            from: ['$bootstrap'],
            allow: ['shared', '$core'],
          },
          {
            from: ['$core'],
            allow: ['shared', '$module', '$shared', '$core'],
          },
          {
            from: ['$shared'],
            allow: ['shared', '$core', '$shared'],
          },
          {
            from: ['$module'],
            allow: [
              'shared',
              '$shared',
              '$core',
              [
                '$module',
                {
                  module: '${module}',
                },
              ],
            ],
          },
          {
            from: ['$page'],
            allow: '$bootstrap',
          },
          {
            from: ['@shared'],
            allow: ['shared', '@core', '@shared'],
          },
          {
            from: ['@core'],
            allow: ['shared', '@shared', '@module', '@core'],
          },
          {
            from: ['@module'],
            allow: [
              'shared',
              '@shared',
              '@core',
              [
                '@module',
                {
                  module: '${module}',
                },
              ],
            ],
          },
          {
            from: ['@page'],
            allow: [
              [
                '@module',
                {
                  module: '${page}',
                },
              ],
            ],
          },
          {
            from: ['template'],
            allow: [
              [
                '@core',
                {
                  module: '${template}',
                },
              ],
            ],
          },
          {
            from: ['shared'],
            allow: 'shared',
          },
        ],
        /* eslint-enable no-template-curly-in-string */
      },
    ],

    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      {
        exceptAfterOverload: false,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],

    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'unknown'],
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],

    'etc/no-misused-generics': 'off',
    'etc/no-t': 'error',
    'etc/prefer-less-than': 'warn',
    'etc/no-commented-out-code': 'warn',

    'functional/no-mixed-type': 'off',
    'functional/no-throw-statement': 'off',
    'functional/prefer-readonly-type': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-expression-statement': 'off',
    'functional/no-return-void': 'warn',
    'functional/prefer-tacit': 'error',
    'functional/immutable-data': [
      'error',
      {
        ignoreClass: true,
        ignoreImmediateMutation: true,
      },
    ],
    'functional/prefer-type-literal': 'error',
    'functional/no-conditional-statement': [
      'error',
      {
        allowReturningBranches: true,
      },
    ],

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        singleReturnOnly: true,
        disallowPrototype: false,
        classPropertiesAllowed: true,
      },
    ],

    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'warn',
    'react/jsx-newline': 'error',

    'unicorn/no-array-callback-reference': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-null': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
  },
  overrides: [
    {
      files: [
        'src/pages/**/*.ts',
        'src/client/**/*.page.tsx',
        'src/client/core/{app,document}/{*.component.tsx,index.ts}',
      ],
      rules: {
        'import/prefer-default-export': 'error',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        'global-require': 'off',

        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',

        'functional/immutable-data': 'off',
        'functional/no-expression-statement': 'off',
        'functional/no-conditional-statement': 'off',

        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['**/*.mjs'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: [
        'src/api/**/*.ts',
        'src/client/core/app/error-boundary/error-boundary.component.tsx',
      ],
      rules: {
        'functional/no-class': 'off',
        'functional/prefer-tacit': 'off',
        'functional/no-this-expression': 'off',
        'functional/no-conditional-statement': 'off',

        'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
            singleReturnOnly: false,
            disallowPrototype: true,
            classPropertiesAllowed: false,
          },
        ],
      },
    },
    {
      files: ['src/client/**/*.page.tsx'],
      rules: {
        'react/destructuring-assignment': 'off',
      },
    },
  ],
};
