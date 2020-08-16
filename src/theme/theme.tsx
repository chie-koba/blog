import React from "react"
import rehypeReact from "rehype-react"
import { H2 } from "components/atoms/h2"
import { H3 } from "components/atoms/h3"
import { P } from "components/atoms/p"
export const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    primary: "#ffccd3",
    text: "#000000",
    grayText: "#4a5568",
    fill: "#E1E2E1",
  },
  fonts:
    "'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif",
  gradation:
    "linear-gradient(to right, #ffccd3, #ffccd3, #ff667a, #ff334e, #ff0022)",
}

export type Theme = typeof theme

//@ts-ignore
export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: (props: any) => {
      return <H2 {...props} />
    },
    h3: (props: any) => {
      return <H3 {...props} />
    },
    p: (props: any) => {
      return <P {...props}></P>
    },
  },
}).Compiler
