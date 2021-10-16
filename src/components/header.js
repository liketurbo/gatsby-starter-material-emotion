import { AppBar, Link as MuiLink,Toolbar, Typography } from "@mui/material"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"

const Header = ({ siteTitle }) => (
  <AppBar
    position="static"
    sx={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: "block"
    }}
  >
    <Toolbar
      sx={{
        m: `0 auto`,
        maxWidth: 960,
        p: `1.45rem 1.0875rem`,
      }}
    >
      <Typography variant="h4" component="h1" sx={{ m: 0 }}>
        <MuiLink
          component={Link} 
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        {siteTitle}
        </MuiLink>
      </Typography>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
