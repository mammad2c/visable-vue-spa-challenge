/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  corePlugins: [
    "margin",
    "padding",
    "container",
    "backgroundColor",
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
  ],
  plugins: [],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      "primary-color-text": "var(--primary-color-text)",
      secondary: "var(--secondary-color)",
      "secondary-color-text": "var(--secondary-color-text)",
    },
    extend: {},
  },
};