module.exports = {
  'src/**/*': [
    'yarn lint types',
    'yarn lint codestyle',
    'yarn lint styles',
  ].map((command) => () => command),
};
