/**
 * @param {Number} N
 * @return {Number}
 */
const fib = (N) => {
  let [A, B] = [0, 1];
  for (let i = 2; i <= N; i += 1) {
    [A, B] = [B, A + B];
  }
  return N < 2 ? N : B;
};
module.exports = fib;
