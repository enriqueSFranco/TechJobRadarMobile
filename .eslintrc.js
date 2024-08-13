module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "expo",
    "prettier",
    "plugin:prettier/recommended",
    "eslint-config-expo",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
