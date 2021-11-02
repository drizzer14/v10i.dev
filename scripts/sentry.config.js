module.exports = (environment, config = {}) => {
  /* @ToDo: return sentry when the problem with production deployments resolves
  https://github.com/getsentry/sentry-javascript/issues/3917
  https://github.com/vercel/next.js/issues/30561
  https://github.com/vercel/next.js/discussions/30137#discussioncomment-1538436
  */
  // eslint-disable-next-line no-constant-condition, etc/no-commented-out-code
  if (false /* process.env.NODE_ENV === 'production' */) {
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
