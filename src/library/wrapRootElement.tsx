import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "emotion-theming"
import React, { ReactNode } from "react"

import ThemeLight from "../themes/ThemeLight"

const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <ThemeProvider theme={ThemeLight}>
    <CssBaseline />
    {element}
  </ThemeProvider>
)

export default wrapRootElement
