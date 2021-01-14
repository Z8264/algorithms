/* eslint-disable no-unused-expressions */
const mySqrt = (x) => {
  if (x === 1) return 1;
  let [left, right, median] = [0, x];
  while (right - left > 1e-6) {
    median = (left + right) / 2;
    if (median * median === x) return median;
    (median * median < x) ? (left = median) : (right = median);
  }
  return Math.floor(median);
};
module.exports = mySqrt;
