module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-typescript': {
          onlyRemoveTypeImports: true,
        },
      },
    ],
  ],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'typescript', 'yaml', 'haskell'],
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    'babel-plugin-parameter-decorator',
  ],
  env: {
    development: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: true,
            fileName: true,
            minify: false,
            transpileTemplateLiterals: true,
          },
        ],
      ],
    },
    production: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: false,
            fileName: false,
            minify: true,
            transpileTemplateLiterals: true,
          },
        ],
      ],
    },
  },
};
