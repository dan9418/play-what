import type { GatsbyConfig } from "gatsby";
//import { resolve } from 'path'

const siteMetadata: GatsbyConfig["siteMetadata"] = {
  title: `Play What?`,
  description: "Music Theory Toolkit",
  url: "www.play-what.com",
};

const plugins: GatsbyConfig["plugins"] = [
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {},
  },
  /*{
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@pw-core": path.resolve(__dirname, 'src/core'),
        "@components": path.resolve(__dirname, 'src/core')
      },
      extensions: []
    }
  },*/
  /*{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/static`,
    }
  },*/
  "gatsby-plugin-use-query-params",
];

const flags: GatsbyConfig["flags"] = {
  DEV_SSR: true,
};

const config: GatsbyConfig = {
  siteMetadata,
  plugins,
  flags,
};

export default config;
