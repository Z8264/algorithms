module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-param-reassign': 0,
    'no-bitwise': 0,
  },
};
