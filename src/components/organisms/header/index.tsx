import React from "react"
import tw, { css } from "twin.macro"
import { Theme } from "theme/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const Header: React.FC = () => {
  return (
    <>
      <header css={headerStyle}>
        <span>loz_blog</span>
        <FontAwesomeIcon icon={faGithub} />
      </header>
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
