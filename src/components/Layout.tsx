/** @jsx jsx */
import { Global, jsx } from "@emotion/core"
import Container from "@material-ui/core/Container"
import PropTypes from "prop-types"
import { FC, Fragment } from "react"

import Footer from "./Footer"
import Header from "./Header"

const Layout: FC = ({ children }) => (
  // eslint-disable-next-line react/jsx-fragments
  <Fragment>
    <Global
      styles={{
        "#gatsby-focus-wrapper": {
          background: "white",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
      }}
    />
    <Header />
    <Container css={{ flex: 1 }}>{children}</Container>
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
