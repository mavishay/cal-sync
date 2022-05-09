// eslint-disable-next-line import/no-extraneous-dependencies
const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
})
