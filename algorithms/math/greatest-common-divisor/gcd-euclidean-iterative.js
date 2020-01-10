const gcd = (a, b) => {
  let max = Math.max(Math.abs(a), Math.abs(b));
  let min = Math.min(Math.abs(a), Math.abs(b));

  while (min !== 0) {
    [max, min] = [min, max % min];
  }

  return max;
};

module.exports = gcd;
