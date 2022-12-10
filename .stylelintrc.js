module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: ['stylelint-value-no-unknown-custom-properties'],
  rules: {
    'csstools/value-no-unknown-custom-properties': true
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: 'stylelint-config-standard-scss'
    }
  ]
};
