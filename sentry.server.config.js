const chalk = require('chalk');

const tryInitializeSentry = require('./scripts/sentry.config');

tryInitializeSentry(chalk.yellow('server'));
