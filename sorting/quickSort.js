/**
 * Quick Sort
 * 快速排序
 */
function sort(arr) {
  const res = [...arr];

  if (res.length <= 1) return res;

  const left = [];
  const right = [];
  const center = [];

  const centerNumber = res.shift();
  center.push(centerNumber);

  while (res.length) {
    const current = res.shift();
    if (current < centerNumber) {
      left.push(current);
    } else if (current > centerNumber) {
      right.push(current);
    } else {
      center.push(centerNumber);
    }
  }

  return sort(left).concat(center, sort(right));
}
module.exports = sort;
