module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    //'airbnb',
    "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "react-hooks"
  ],
  rules: {
    "linebreak-style": ["error", "windows"],
    "no-nested-ternary": "off",
    "no-case-declarations": "off",
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "max-len": "off",
    "arrow-body-style": "off",
    "comma-dangle": ["error", "never"],
    "no-tabs": ["off"],
    "no-trailing-spaces": "error",
    "react/prop-types": 0,
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    "import/extensions": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any":"off",
    "@typescript-eslint/no-unused-vars":"off"
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};
