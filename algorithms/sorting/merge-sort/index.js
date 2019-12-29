/**
 * Merge Sort
 * 归并排序
 */
function sort(arr = []) {
  if (arr.length <= 1) return arr;
  const a = [];

  const i = Math.floor(arr.length / 2);
  const [left, right] = [sort(arr.slice(0, i)), sort(arr.slice(i))];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      a.push(left.shift());
    } else {
      a.push(right.shift());
    }
  }

  return a.concat(left, right);
}
module.exports = sort;
