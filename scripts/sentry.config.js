module.exports = (environment, config = {}) => {
  if (process.env.NODE_ENV === 'production') {
    const chalk = require('chalk');

    const { init: initSentry } = require('@sentry/nextjs');

    const newLine = () => console.log();

    const divider = () =>
      console.log(
        chalk.grey(
          '------------------------------------------------------------------------------------'
        )
      );

    const options = {
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1,
      ...config,
    };

    initSentry(options);

    newLine();
    divider();
    newLine();
    console.log(
      `Initialized ${chalk.bold(
        environment
      )} Sentry with the following configuration:\n`,
      JSON.stringify(options, null, 2)
    );
    newLine();
    divider();
    newLine();
  }
};
