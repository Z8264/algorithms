const isPowerOfTwo = (n) => n > 0 && (n & (n - 1)) === 0;

module.exports = isPowerOfTwo;
