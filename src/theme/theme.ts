import React from "react"
export const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    primary: "#f8bbd0",
    Plight: "#ffeeff",
    Pdark: "#c48b9f",
    text: "#000000",
    fill: "#E1E2E1",
  },
  fonts:
    "'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif",
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px",
    },
  },
}

export type Theme = typeof theme
