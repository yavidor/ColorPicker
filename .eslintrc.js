module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "no-console": "off",
  },
};
