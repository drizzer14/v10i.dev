const basePath = 'src';

const extensions = ['ts', 'tsx'];
export const jsExtensions = ['js', 'mjs'];

/**
 * @param additionalExtensions {string[]}
 *
 * @returns string
 */
export const extensionsToExt = (additionalExtensions = []) =>
  `${basePath}/ --ext ${[...extensions, ...additionalExtensions]
    .map((extension) => `.${extension}`)
    .join(',')}`;

/**
 * @param additionalExtensions {string[]}
 *
 * @returns string
 */
export const extensionsToGlob = (additionalExtensions = []) => {
  return `${basePath}/**/*.{${[...extensions, ...additionalExtensions]}}`;
};
