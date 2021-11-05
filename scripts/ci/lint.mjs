import { run } from './shared/run.mjs';
import { eslint, prettier, stylelint } from './shared/runners.mjs';

/**
 * @type {Record<string, { command: string; env?: string[]; options?: string[] }>}
 */
const linters = {
  formatting: prettier({
    options: ['--check'],
  }),
  boundaries: eslint({
    config: 'eslint.boundaries',
    env: ['ESLINT_PLUGIN_BOUNDARIES_DEBUG=1'],
  }),
  codestyle: eslint({
    options: ['--report-unused-disable-directives'],
  }),
  styles: stylelint(),
  types: {
    command: 'tsc',
  },
  'package-json': {
    command: 'npmPkgJsonLint',
    options: ['--quiet', '.'],
  },
};

const {
  _: [, linter],
  // eslint-disable-next-line no-undef
} = argv;

await (linter
  ? run(linters[linter])
  : Promise.all(
      [
        linters.codestyle,
        /*
          Disabling the stylelint until it supports styled-components again
        */
        // linters.styles,
        linters.types,
        linters['package-json'],
      ].map((element) => run(element))
    ));
