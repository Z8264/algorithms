const isPowerOfThree = (n) => (Math.log10(n) / Math.log10(3)) % 1 === 0;

module.exports = isPowerOfThree;
