module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "es5",
        endOfLine: "lf",
        tabWidth: 2,
        printWidth: 120,
        bracketSpacing: true,
        bracketSameLine: false,
        vueIndentScriptAndStyle: true,
      },
    ],
  },
};
