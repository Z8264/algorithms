const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));
module.exports = fibonacci;
