module.exports = {
  env: {
    browser  : true,
    commonjs : true,
    es6      : true,
    node     : true,
  },
  globals: {
    __DEV__   : false,
    __TEST__  : false,
    __PROD__  : false,
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
