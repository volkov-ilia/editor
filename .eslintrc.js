const config = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:monorepo/recommended",
  ],
  rules: {
    "no-console": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  ignorePatterns: [".next", "node_modules", "mongodb", "dist", "coverage", "common/libs/hwdtech-admin-components"],
}

module.exports = config
