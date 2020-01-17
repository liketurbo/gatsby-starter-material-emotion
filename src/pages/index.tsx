/** @jsx jsx */
import { jsx } from "@emotion/core"
import Collapse from "@material-ui/core/Collapse"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import { Theme } from "@material-ui/core/styles"
import { useTheme } from "emotion-theming"
import { useState } from "react"

import ImageAstronaut from "../components/Image/ImageAstronaut"
import Layout from "../components/Layout"
import ListItemExpandable from "../components/ListItem/ListItemExpandable"
import ListItemSimple from "../components/ListItem/ListItemSimple"
import Seo from "../components/Seo"

const IndexPage = () => {
  const [features, setFeatures] = useState(true)
  const [info, setInfo] = useState(true)

  const theme = useTheme<Theme>()

  const handleClick = (id: string) => {
    switch (id) {
      case "features":
        setFeatures(!features)

        break
      case "info":
        setInfo(!info)

        break
      default:
        break
    }
  }

  return (
    <Layout>
      <Seo />
      <Grid container justify="center" spacing={3}>
        <Grid item xs={2}>
          <div
            css={{
              marginBottom: "1.45rem",
              maxWidth: "100px",
            }}
          >
            <ImageAstronaut />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>{"Gatsby Material UI Starter"}</h1>
          <h5>
            {
              "A responsive, minimalist Gatsby starter based on the world's most popular React UI framework."
            }
          </h5>
        </Grid>
      </Grid>
      <Divider />
      <List
        component="nav"
        css={{
          backgroundColor: theme.palette.background.paper,
          width: "100%",
        }}
      >
        <ListItemExpandable
          active={features}
          icon="star"
          setActive={() => handleClick("features")}
          title="Features"
        />
        <Collapse in={!features} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemSimple title="Material-UI" />
            <ListItemSimple title="SEO" />
            <ListItemSimple title="Roboto Typeface" />
          </List>
        </Collapse>
        <ListItemExpandable
          active={info}
          icon="info"
          setActive={() => handleClick("info")}
          title="Info"
        />
        <Collapse in={!info} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemSimple title="Based on Gatsby Default Starter" />
            <ListItemSimple title="Uses Gatsby Material-UI Plugin" />
          </List>
        </Collapse>
      </List>
    </Layout>
  )
}

export default IndexPage
