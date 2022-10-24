const { defineConfig } = require('eslint-define-config')

const eslintBaseConfig = defineConfig({
  extends: ['@antfu/basic'],
})

module.exports = eslintBaseConfig

