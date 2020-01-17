import ListItemMui from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import InfoIcon from "@material-ui/icons/Info"
import StarIcon from "@material-ui/icons/Star"
import PropTypes from "prop-types"
import React, { FC } from "react"

const ListItemExpandable: FC<ListItemExpandableProps> = ({
  title,
  icon,
  active,
  setActive,
}) => (
  <ListItemMui button id="features" onClick={() => setActive(!active)}>
    <ListItemIcon>{icon === "star" ? <StarIcon /> : <InfoIcon />}</ListItemIcon>
    <ListItemText primary={title} />
    {active ? <ExpandLess /> : <ExpandMore />}
  </ListItemMui>
)

ListItemExpandable.propTypes = {
  active: PropTypes.bool.isRequired,
  icon: PropTypes.oneOf<ListItemExpandableProps["icon"]>(["star", "info"])
    .isRequired,
  setActive: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export interface ListItemExpandableProps {
  active: boolean
  icon: "star" | "info"
  setActive: (arg: boolean) => void
  title: string
}

export default ListItemExpandable
