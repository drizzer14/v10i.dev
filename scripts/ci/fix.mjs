import { run } from './shared/run.mjs';
import { eslint, prettier, stylelint } from './shared/runners.mjs';

/**
 * @type {Record<string, { command: string; env?: string[]; options?: string[] }>}
 */
const fixers = {
  formatting: prettier({
    options: ['--write'],
  }),
  codestyle: eslint({
    options: ['--fix'],
  }),
  styles: stylelint({
    options: ['--fix'],
  }),
};

const {
  _: [, fixer],
  // eslint-disable-next-line no-undef
} = argv;

await (fixer
  ? run(fixers[fixer])
  : Promise.all(
      [fixers.codestyle, fixers.styles].map((element) => run(element))
    ));
