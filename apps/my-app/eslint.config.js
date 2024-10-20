const nx = require('@nx/eslint-plugin')
const baseConfig = require('../../eslint.config.js')

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    // Override or add rules here
    rules: {
      eqeqeq: 'off',
      semi: ['error', 'never'],
    },
  },
]