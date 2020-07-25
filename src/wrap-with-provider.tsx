import React from "react"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./theme/theme"

export default ({ element }: { element: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
