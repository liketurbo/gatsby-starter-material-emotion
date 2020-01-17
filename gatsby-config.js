const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gatsby starter with Material UI and Emotion 👩‍🎤",
    description: "Gatsby starter for future projects.",
    author: "@liketurbo",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-material-emotion",
        short_name: "starter",
        start_url: "/",
        background_color: "#000",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: path.join(__dirname, "src/images/gatsby-icon.png"), // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src/images"),
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
  ],
}
