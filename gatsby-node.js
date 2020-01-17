/**
 * Fix: react-🔥-dom patch is not detected.
 * https://github.com/gatsbyjs/gatsby/issues/11934
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
