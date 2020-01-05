function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i += 1) {
    res *= i;
  }
  return res;
}
module.exports = factorial;
