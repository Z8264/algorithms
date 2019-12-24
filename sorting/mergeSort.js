/**
 * Merge Sort
 * 归并排序
 */
function sort(arr) {
  if (arr.length <= 1) return arr;
  const res = [];

  const i = Math.floor(arr.length / 2);
  const [left, right] = [sort(arr.slice(0, i)), sort(arr.slice(i))];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  return res.concat(left, right);
}
module.exports = sort;
