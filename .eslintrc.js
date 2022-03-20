module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        args: "none",
        varsIgnorePattern: "^_",
      },
    ],
    "react/react-in-jsx-scope": ["off"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "space-before-function-paren": ["off"],
    "comma-dangle": ["off", "never"],
  },
};
