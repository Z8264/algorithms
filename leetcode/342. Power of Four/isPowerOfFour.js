const isPowerOfFour = (n) => n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;

module.exports = isPowerOfFour;
