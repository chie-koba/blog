import React from "react"
import tw, { css } from "twin.macro"

export const H3: React.FC = props => {
  return <h3 css={style}>{props.children}</h3>
}

const style = css([tw`text-lg`, tw`pb-2`])
