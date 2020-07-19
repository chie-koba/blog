import React from "react"
import { ThemeProvider } from "emotion-theming"
import theme from "@rebass/preset"

export default ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
