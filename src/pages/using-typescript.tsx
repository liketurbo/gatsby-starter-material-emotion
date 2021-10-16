// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Typography, Link as MuiLink } from "@mui/material"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Using TypeScript" />
    <Typography variant="h4" component="h1">Gatsby supports TypeScript by default!</Typography>
    <Typography>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </Typography>
    <Typography>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>tsconfig</em> file.
    </Typography>
    <Typography>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </Typography>
    <Typography>
      To learn more, head over to our{" "}
      <MuiLink href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </MuiLink>
      .
    </Typography>
    <MuiLink component={Link} to="/">Go back to the homepage</MuiLink>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
