import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"

import ImageAstronaut from "../components/Image/ImageAstronaut"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Grid container justify="center" spacing={3}>
      <Grid item>
        <Typography component="h1" variant="h6">
          {"Gatsby works so nice with Material UI and Emotion"}
        </Typography>
        <ImageAstronaut />
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
