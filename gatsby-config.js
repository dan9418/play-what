const { register } = require('esbuild-register/dist/node')

register({
  target: 'node18'
})

module.exports = require('./gatsby-config.ts')
