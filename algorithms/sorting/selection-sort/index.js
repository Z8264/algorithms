/**
 * Selection Sort
 * 选择排序
 */
function sort(arr = []) {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < a.length; j += 1) {
      if (a[j] < a[minIndex]) minIndex = j;
    }
    if (minIndex !== i) [a[i], a[minIndex]] = [a[minIndex], a[i]];
  }
  return a;
}
module.exports = sort;
