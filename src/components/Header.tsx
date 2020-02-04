/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Theme } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { graphql, Link, useStaticQuery } from "gatsby"

const Header = () => {
  const {
    site: {
      siteMetadata: { siteName },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `)

  return (
    <Container
      css={(theme: Theme) => ({ background: theme.palette.primary.main })}
    >
      <AppBar
        css={(theme: Theme) => ({
          background: "transparent",
          padding: theme.spacing(1),
        })}
        elevation={0}
        position="static"
      >
        <Typography component="h1" variant="h5">
          <Link
            css={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            title="Home"
            to="/"
          >
            {siteName}
          </Link>
        </Typography>
      </AppBar>
    </Container>
  )
}

export default Header
