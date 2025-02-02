module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-html',
  ],
  defaultSeverity: 'warning',
  plugins: [
    'stylelint-less',
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {},
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {},
    },
  ],
}
