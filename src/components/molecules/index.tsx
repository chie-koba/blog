import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import tw, { css } from "twin.macro"
import { faClock } from "@fortawesome/free-regular-svg-icons"

export const date: React.FC = props => {
  return (
    <div css={dateStyle}>
      <FontAwesomeIcon icon={faClock} css={iconStyle} />
    </div>
  )
}

const dateStyle = css([tw`text-base`, tw`col-start-8`, tw`col-end-12`])
const iconStyle = css([tw`mr-4`])
