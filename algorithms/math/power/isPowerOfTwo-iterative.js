const isPowerOfTwo = (n) => {
  if (n < 1) return false;
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};

module.exports = isPowerOfTwo;
