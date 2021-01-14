const climbStairs = (n) => {
  let [a, b] = [1, 2];
  for (let i = 3; i <= n; i += 1) {
    [a, b] = [b, a + b];
  }
  return n < 3 ? n : b;
};
module.exports = climbStairs;
