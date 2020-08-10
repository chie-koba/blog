import React from "react"
import tw, { css } from "twin.macro"

export const H1: React.FC = props => {
  return <h1 css={style}>{props.children}</h1>
}

const style = css([tw`text-2xl`, tw`pb-2`])
