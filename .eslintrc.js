module.exports = {
  env: {
    browser  : true,
    commonjs : true,
    es6      : true,
    node     : true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
          'test',
        ],
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
  },
}
