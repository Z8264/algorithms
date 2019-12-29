/**
 * Insertion Sort
 * 插入排序
 */
function sort(arr = []) {
  const a = [...arr];
  for (let i = 1; i < a.length; i += 1) {
    for (let j = i; j > 0 && a[j] < a[j - 1]; j -= 1) {
      [a[j], a[j - 1]] = [a[j - 1], a[j]];
    }
  }
  return a;
}
module.exports = sort;
