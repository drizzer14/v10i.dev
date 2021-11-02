module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-prettier',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'prettier/prettier': true,

    indentation: 2,
    'no-empty-source': null,
    'no-descending-specificity': null,

    'at-rule-no-unknown': null,

    'declaration-empty-line-before': null,
    'declaration-property-value-disallowed-list': null,

    'property-no-vendor-prefix': null,

    'font-family-no-missing-generic-family-keyword': null,

    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
    'selector-no-vendor-prefix': null,

    'order/properties-order': [],
    'order/properties-alphabetical-order': null,

    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true,
      },
    ],
  },
};
