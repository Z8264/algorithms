const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);
module.exports = factorial;
