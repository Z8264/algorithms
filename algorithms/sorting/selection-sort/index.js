/**
 * Selection Sort
 * 选择排序
 */
function sort(arr = []) {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < a.length; j += 1) {
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}
module.exports = sort;
