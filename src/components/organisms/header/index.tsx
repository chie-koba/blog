import React from "react"
import tw, { css, theme } from "twin.macro"
import { Theme } from "theme/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const Header: React.FC = () => {
  return (
    <>
      <header css={headerStyle}>
        <span>loz_blog</span>
        <a
          href="https://github.com/loztsper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon css={iconStyle} icon={faGithub} color="#4a5568" />
        </a>
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

const iconStyle = (theme: Theme) => css([tw`mr-8`])
