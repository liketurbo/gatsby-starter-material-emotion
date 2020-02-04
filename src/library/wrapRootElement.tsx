import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "emotion-theming"
import React, { ReactNode } from "react"

const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <ThemeProvider theme={createMuiTheme()}>
    <CssBaseline />
    {element}
  </ThemeProvider>
)

export default wrapRootElement
