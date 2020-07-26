import React from "react"
export const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    primary: "#ffccd3",
    text: "#000000",
    fill: "#E1E2E1",
  },
  fonts:
    "'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif",
  gradation:
    "linear-gradient(to right, #ffccd3, #ffccd3, #ff667a, #ff334e, #ff0022)",
}

export type Theme = typeof theme
