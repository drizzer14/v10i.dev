import {
  jsExtensions,
  extensionsToExt,
  extensionsToGlob,
} from './extensions.mjs';
import { config } from './config.mjs';
import { options } from './options.mjs';

/**
 * @param runner {{ options: string[] }}
 * @returns {{ command: string; options: string[] }}
 */
export const prettier = (runner) => ({
  command: 'prettier',
  options: [...runner.options, extensionsToGlob()],
});

/**
 * @param runner {{ config?: string; env?: string[]; options?: string[] }}
 * @returns {{ command: string; env?: string[]; options: string[] }}
 */
export const eslint = (runner) => {
  const {
    config: runnerConfig = 'eslint',
    env = [],
    options: runnerOptions = [],
  } = runner;

  return {
    command: 'eslint',
    env,
    options: [
      config(runnerConfig),
      ...runnerOptions,
      ...options,
      extensionsToExt(jsExtensions),
    ],
  };
};

/**
 * @param runner? {{ options?: string[] }}
 * @returns {{ command: string; options: string[] }}
 */
export const stylelint = (runner) => {
  const { options: runnerOptions = [] } = runner || {};

  return {
    command: 'stylelint',
    options: [...runnerOptions, ...options, extensionsToGlob()],
  };
};
