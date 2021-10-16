/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Link, Box } from "@mui/material"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box
        sx={{
          m: `0 auto`,
          maxWidth: 960,
          p: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Box
          sx={{
            mt: `2rem`,
          }}
          component="footer"
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link href="https://www.gatsbyjs.com">Gatsby</Link>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
