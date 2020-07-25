import React from "react"
import { Global as EmotionGlobal } from "@emotion/core"
import { css } from "twin.macro"
import { Theme } from "theme/theme"
import { Header } from "components/organisms/header"

export const Global: React.FC = () => {
  return (
    <>
      <EmotionGlobal styles={styles} />
    </>
  )
}

const styles = (theme: Theme) => css({ html: { fontFamily: theme.fonts } })
