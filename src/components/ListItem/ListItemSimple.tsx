/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Theme } from "@material-ui/core"
import ListItemMui from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Done from "@material-ui/icons/Done"
import PropTypes from "prop-types"
import { FC } from "react"

const ListItemSimple: FC<ListItemSimpleProps> = ({ title }) => (
  <ListItemMui
    button
    css={(theme: Theme) => ({
      paddingLeft: theme.spacing(4),
    })}
  >
    <ListItemIcon>
      <Done />
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItemMui>
)

ListItemSimple.propTypes = {
  title: PropTypes.string.isRequired,
}

export interface ListItemSimpleProps {
  title: string
}

export default ListItemSimple
