module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    semi: 0,
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
