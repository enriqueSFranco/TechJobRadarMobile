module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "@react-native-community/eslint-config"
  ],

  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: [
    "react",
    "react-native"
  ],
  rules: {
    "react-in-jsx-scope": "off"
  }
}
