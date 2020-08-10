import React from "react"
import tw, { css } from "twin.macro"

export const P: React.FC = props => {
  return <p>{props.children}</p>
}

const style = css([tw`text-base`, tw`pt-5`])
