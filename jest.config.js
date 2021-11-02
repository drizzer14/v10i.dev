const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { paths } = require('./tsconfig.json').compilerOptions;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '.*\\.spec.tsx?$',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/scripts/',
    '<rootDir>/node_modules/',
  ],

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },

  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -250,
    },
  },
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],

  clearMocks: true,

  rootDir: './src',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths),
    '\\.(svg)$': '<rootDir>/mocks/empty-module.js',
  },
};
