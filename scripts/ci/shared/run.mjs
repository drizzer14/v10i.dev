/**
 * @param runner {{ command: string; env?: string[]; options?: string[] }}
 */
export const run = async (runner) => {
  const { command, env = [], options = [] } = runner;

  const q = $.quote;

  $.quote = (v) => v;

  await $`${env} ${command} ${options}`;

  $.quote = q;
};
