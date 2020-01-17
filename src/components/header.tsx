/** @jsx jsx */
import { jsx } from "@emotion/core"
import AppBar from "@material-ui/core/AppBar"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Theme } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import HomeIcon from "@material-ui/icons/Home"
import MenuIcon from "@material-ui/icons/Menu"
import { useTheme } from "emotion-theming"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FC, useState } from "react"

const Header: FC<HeaderProps> = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme<Theme>()

  const drawerWidth = 240

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div css={{ display: "flex" }}>
      <AppBar
        css={[
          {
            background: "linear-gradient(to right,  #663399, #5B72FF)",
            transition: theme.transitions.create(["margin", "width"], {
              duration: theme.transitions.duration.leavingScreen,
              easing: theme.transitions.easing.sharp,
            }),
          },
          open && {
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
              duration: theme.transitions.duration.enteringScreen,
              easing: theme.transitions.easing.easeOut,
            }),
            width: `calc(100% - ${drawerWidth}px)`,
          },
        ]}
        elevation={0}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            aria-label="Open drawer"
            color="inherit"
            css={[
              {
                marginRight: theme.spacing(2),
              },
              open && { display: "none" },
            ]}
            edge="start"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" variant="h6">
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        css={{
          "& > div": {
            width: drawerWidth,
          },
          flexShrink: 0,
          width: drawerWidth,
        }}
        open={open}
        variant="persistent"
      >
        <div
          css={{
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 8px",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(theme.mixins.toolbar as any),
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <Link
                css={{
                  color: "inherit",
                  textDecoration: "inherit",
                }}
                to="/"
              >
                {"Home"}
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export interface HeaderProps {
  siteTitle?: string
}

export default Header
