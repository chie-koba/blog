import React from "react"
import tw, { css } from "twin.macro"

export const H2: React.FC = props => {
  return <h2 css={style}>{props.children}</h2>
}

const style = css([
  tw`border`,
  tw`border-solid`,
  tw`pb-2`,

  {
    borderImage: "linear-gradient(to right,  #ffccd3, #ff667a ) 1 / 0  0 4px",
  },
])
