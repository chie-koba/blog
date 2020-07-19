import React from "react"
import preset from "@rebass/preset"
export const theme = {
  ...preset,
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    primary: "#bbdefb",
    light: "eeffff",
    dark: "8aacc8",
  },
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