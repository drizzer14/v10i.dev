module.exports = {
  rules: {
    'require-author': 'error',
    'require-dependencies': 'error',
    'require-devDependencies': 'error',
    'require-engines': 'error',
    'require-homepage': 'error',
    'require-license': 'error',
    'require-name': 'error',
    'require-repository': 'error',
    'require-scripts': 'error',
    'require-version': 'error',

    'dependencies-type': 'error',
    'devDependencies-type': 'error',
    'engines-type': 'error',
    'homepage-type': 'error',
    'license-type': 'error',
    'name-type': 'error',
    'repository-type': 'error',
    'scripts-type': 'error',
    'version-type': 'error',

    'valid-values-author': ['error', ['Dmytro Vasylkivskyi']],
    'valid-values-engines': ['error', [{ node: '>=14.17' }]],
    'valid-values-license': ['error', ['MIT']],
    'valid-values-private': ['error', [true]],

    'no-repeated-dependencies': 'error',
    'no-archive-dependencies': 'error',
    'prefer-absolute-version-dependencies': 'error',
    'no-file-dependencies': 'error',
    'no-git-dependencies': 'error',

    'no-archive-devDependencies': 'error',
    'no-file-devDependencies': 'error',
    'no-git-devDependencies': 'error',

    'prefer-scripts': ['error', ['start', 'build', 'test', 'lint', 'fix']],

    'name-format': 'error',
    'version-format': 'error',

    'no-duplicate-properties': 'error',
    'prefer-property-order': [
      'error',
      [
        'name',
        'version',
        'private',
        'license',
        'author',
        'homepage',
        'repository',
        'engines',
        'scripts',
        'dependencies',
        'devDependencies',
      ],
    ],

    'prefer-no-engineStrict': 'error',
    'prefer-no-optionalDependencies': 'error',
    'prefer-no-peerDependencies': 'error',
  },
};
