/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  corePlugins: Array.from(
    new Set([
      "margin",
      "padding",
      "container",
      "backgroundColor",
      "height",
      "maxWidth",
      "fontStyle",
      "columns",
      "flex",
      "alignItems",
      "justifyContent",
      "fontFamily",
      "fontSize",
      "textColor",
      "fontWeight",
      "preflight",
      "display",
      "gridTemplateColumns",
      "gridColumn",
      "borderWidth",
      "borderColor",
      "divideWidth",
      "divideColor",
      "overflow",
    ]),
  ),
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-color-text": "var(--primary-color-text)",
        secondary: "var(--secondary-color)",
        "secondary-color-text": "var(--secondary-color-text)",
      },
    },
  },
};
