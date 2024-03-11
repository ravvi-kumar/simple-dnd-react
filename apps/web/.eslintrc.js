/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@simple-dnd-react/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
