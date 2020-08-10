import React from "react"
import { Global as EmotionGlobal } from "@emotion/core"
import { css } from "twin.macro"
import { Theme } from "theme/theme"

export const Global: React.FC<{}> = props => {
  return (
    <>
      <EmotionGlobal styles={styles} />
      {props.children}
    </>
  )
}

const styles = (theme: Theme) => css({ html: { fontFamily: theme.fonts } })
