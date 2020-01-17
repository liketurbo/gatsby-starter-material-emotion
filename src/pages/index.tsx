/** @jsx jsx */
import { jsx } from "@emotion/core"
import Collapse from "@material-ui/core/Collapse"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Theme } from "@material-ui/core/styles"
import Done from "@material-ui/icons/Done"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import InfoIcon from "@material-ui/icons/Info"
import StarIcon from "@material-ui/icons/Star"
import { useState } from "react"

import Image from "../components/Image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => {
  const [features, setFeatures] = useState(true)
  const [info, setInfo] = useState(true)

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
            <Image />
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
        css={(theme: Theme) => ({
          backgroundColor: theme.palette.background.paper,
          width: "100%",
        })}
      >
        <ListItem button id="features" onClick={() => handleClick("features")}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Features" />
          {features ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!features} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              css={(theme: Theme) => ({
                paddingLeft: theme.spacing(4),
              })}
            >
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Material UI Framework" />
            </ListItem>
            <ListItem
              button
              css={(theme: Theme) => ({
                paddingLeft: theme.spacing(4),
              })}
            >
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Progressive Web App" />
            </ListItem>
            <ListItem
              button
              css={(theme: Theme) => ({
                paddingLeft: theme.spacing(4),
              })}
            >
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="SEO" />
            </ListItem>
            <ListItem
              button
              css={(theme: Theme) => ({
                paddingLeft: theme.spacing(4),
              })}
            >
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Offline Support" />
            </ListItem>
            <ListItem
              button
              css={(theme: Theme) => ({
                paddingLeft: theme.spacing(4),
              })}
            >
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Roboto Typeface (self hosted)" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick("info")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Info" />
          {info ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!info} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              css={(theme: Theme) => ({
                paddingLeft: theme.spacing(4),
              })}
            >
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Based on Gatsby Default Starter" />
            </ListItem>
            <ListItem
              button
              css={(theme: Theme) => ({
                paddingLeft: theme.spacing(4),
              })}
            >
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Uses Gatsby Material UI Plugin" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Layout>
  )
}

export default IndexPage
