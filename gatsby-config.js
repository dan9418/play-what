
module.exports = {
  siteMetadata: {
    title: `Your Site Name`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
}
