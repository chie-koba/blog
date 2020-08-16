import React from "react"
import tw, { css } from "twin.macro"
import { Theme } from "theme/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { Link } from "gatsby"

interface Props {
  title: string | undefined | null
  date: string | undefined
  slug: string | undefined | null
}

export const ArticleListItem: React.FC<Props> = props => {
  return (
    <Link css={wrapStyle} to={props.slug ?? "/"}>
      <div css={titleStyle}>{props.title ?? ""}</div>
      <div css={dateStyle}>
        <FontAwesomeIcon icon={faClock} css={iconStyle} />
        {props.date}
      </div>
    </Link>
  )
}

const iconStyle = css([tw`mr-4`])
const titleStyle = css([tw`text-lg`, tw`col-span-12`])
const dateStyle = css([tw`text-base`, tw`col-start-8`, tw`col-end-12`])

const wrapStyle = (theme: Theme) =>
  css([tw`p-8`, tw`grid`, tw`grid-cols-12`, { color: theme.colors.grayText }])
