import React from "react"
import { ThemeProvider } from "emotion-theming"
import { theme, Theme } from "./theme/theme"
import { Global as EmotionGlobal } from "@emotion/core"
import { css } from "twin.macro"

export default ({ element }: { element: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <EmotionGlobal styles={styles} />
      {element}
    </ThemeProvider>
  )
}

const styles = (theme: Theme) => css({ html: { fontFamily: theme.fonts } })
