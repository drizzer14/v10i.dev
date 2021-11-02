const chalk = require('chalk');
const { tap } = require('fnts/tap');

const newLine = () => console.log();

const divider = () =>
  console.log(
    chalk.grey(
      '------------------------------------------------------------------------------------'
    )
  );

const title = (env, color) =>
  console.log(chalk.bold[color](`${env} Runtime Configuration`));

const config = (value) => console.log(JSON.stringify(value, undefined, 2));

module.exports = tap((nextConfig) => {
  const { publicRuntimeConfig, env, serverRuntimeConfig } = nextConfig;

  newLine();
  divider();
  newLine();
  title('Public', 'redBright');
  newLine();
  config(publicRuntimeConfig);
  newLine();
  title('Client', 'blue');
  newLine();
  config(env);
  newLine();
  title('Server', 'yellow');
  newLine();
  config(serverRuntimeConfig);
  newLine();
  divider();
  newLine();
});
