module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "import/newline-after-import": "error",
    "import/order": "error",
    "no-unused-vars": "off",
    "sort-keys": "error",
    "vue/multi-word-component-names": "off",
  },
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".js", ".ts", ".vue"],
        map: [["@", "./src"]],
      },
    },
  },
};
