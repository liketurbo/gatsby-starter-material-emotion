import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Typography, Link as MuiLink } from "@mui/material"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Typography variant="h4" component="h1">Hi from the second page</Typography>
    <Typography>Welcome to page 2</Typography>
    <MuiLink component={Link} to="/">Go back to the homepage</MuiLink>
  </Layout>
)

export default SecondPage
