module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    typography: theme => ({
      default: {
        css: [
          {
            h2: {
              fontWeight: "inherit",
            },
            h3: {
              fontWeight: "inherit",
            },
          },
        ],
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
