import React from "react"
import tw, { css } from "twin.macro"
import { Theme } from "theme/theme"

export const Header: React.FC = () => {
  return (
    <>
      <header css={headerStyle}>loz_blog</header>
    </>
  )
}

const headerStyle = (theme: Theme) =>
  css([
    tw`flex`,
    tw`items-center`,
    tw`justify-between`,
    tw`flex-wrap`,
    tw`p-3`,
    tw`mb-8`,
    {
      backgroundColor: theme.colors.primary,
    },
  ])
