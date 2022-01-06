const path = require('path')

module.exports = {
  pathPrefix: "/play-what",
  siteMetadata: {
    title: `Play What`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@pw-core": path.resolve(__dirname, 'src/core'),
          "@components": path.resolve(__dirname, 'src/core')
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/static`,
      }
    },
    "gatsby-plugin-use-query-params"
  ]
}
