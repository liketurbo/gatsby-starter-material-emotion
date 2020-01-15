module.exports = {
  siteMetadata: {
    title: 'Продажа людей, бананов...',
    description:
      'На этом сайте вы cможете купить людей и бананы по самой выгодной цене.',
    author: `@liketurbo`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
}
