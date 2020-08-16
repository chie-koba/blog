import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import tw, { css } from "twin.macro"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { InterpolationWithTheme } from "@emotion/core"

// NOTE: https://github.com/FortAwesome/react-fontawesome/issues/234
config.autoAddCss = false

interface Props {
  css?: InterpolationWithTheme<any>
  date: string | undefined
}

export const Date: React.FC<Props> = props => {
  return (
    <div css={dateStyle} {...props}>
      <FontAwesomeIcon icon={faClock} css={iconStyle} />
      {props.date}
    </div>
  )
}

const dateStyle = css([tw`text-base`])
const iconStyle = css([tw`mr-4`])
