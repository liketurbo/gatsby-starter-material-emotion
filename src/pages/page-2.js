import { Link as MuiLink,Typography } from "@mui/material"
import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Typography variant="h4" component="h1">Hi from the second page</Typography>
    <Typography>Welcome to page 2</Typography>
    <MuiLink component={Link} to="/">Go back to the homepage</MuiLink>
  </Layout>
)

export default SecondPage
