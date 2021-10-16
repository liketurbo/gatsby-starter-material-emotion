import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Typography, Link as MuiLink } from "@mui/material"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Typography variant="h4" component="h1">
      Hi people
    </Typography>
    <Typography>Welcome to your new Gatsby site.</Typography>
    <Typography>Now go build something great.</Typography>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <Typography>
      <MuiLink component={Link} to="/page-2/">
        Go to page 2
      </MuiLink>{" "}
      <br />
      <MuiLink component={Link} to="/using-typescript/">Go to "Using TypeScript"</MuiLink>
    </Typography>
  </Layout>
)

export default IndexPage
