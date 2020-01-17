/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { FC } from "react"

import Header from "./Header"

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      css={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 100,
        }}
      >
        <main>{children}</main>
        <footer css={{ paddingTop: 10 }}>
          {`© ${new Date().getFullYear()}, Built with `}
          <a href="https://www.gatsbyjs.org">{"Gatsby"}</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
