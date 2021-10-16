import { Typography } from "@mui/material"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Typography variant="h4" component="h1">404: Not Found</Typography>
    <Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
  </Layout>
)

export default NotFoundPage
