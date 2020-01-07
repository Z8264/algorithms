const divisor = require('../greatest-common-divisor/euclidean-iterative');

const multiple = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / divisor(a, b);
};

module.exports = multiple;
