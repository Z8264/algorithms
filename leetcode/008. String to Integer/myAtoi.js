/* eslint-disable no-nested-ternary */
const myAtoi = (str) => {
  const [max, min] = [(2 ** 31) - 1, -(2 ** 31)];
  const num = parseInt(str, 10);
  return num > max ? max : num < min ? min : (num || 0);
};

module.exports = myAtoi;
