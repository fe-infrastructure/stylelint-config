module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      true,
      {
        endOfLine: 'auto'
      }
    ]
  },
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      extends: [
        'stylelint-config-html/html',
      ]
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      extends: ['stylelint-config-recommended-less']
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss']
    }
  ]
}