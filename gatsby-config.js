/**
 * changes made to this file
 * updated the reference of where the markdown files are located instead of pages/posts they are inside content/posts
 * THis was applied from a organizational point of view, namely separation of concerns approach. Inside of pages should only exist the site's pages, not anything else.
 * The blog/markdown content should be inside it's own folder.
 */
module.exports = {
  siteMetadata: {
    title: `valdezDev`,
    description: `A portfolio and blog showcasing my work and all sorts of information.`,
    author: `Paul Valdez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    //`gatsby-plugin-offline`,
  ],
}
