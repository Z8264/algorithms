const fibonacci = (n) => {
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    [a, b] = [b, a + b];
  }
  return n < 2 ? n : b;
};
module.exports = fibonacci;
