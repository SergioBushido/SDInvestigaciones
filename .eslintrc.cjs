module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:solid/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['solid'],
  rules: {
    'solid/reactivity': 'warn',
    'solid/no-destructure': 'warn',
    'solid/jsx-no-undef': 'error',
  },
  settings: {
    solid: {
      typescript: false,
    },
  },
};
