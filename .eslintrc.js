module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    "unused-imports",
    "jest"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "eol-last": ["error", "always"],
    "no-console": ["warn"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "unused-imports/no-unused-imports": "warn"
  }
};
