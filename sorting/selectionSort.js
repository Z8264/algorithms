/**
 * Selection Sort
 * 选择排序
 */
function sort(arr) {
  const res = [...arr];
  for (let i = 0; i < res.length - 1; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < res.length; j += 1) {
      if (res[j] < res[minIndex]) minIndex = j;
    }
    if (minIndex !== i) [res[i], res[minIndex]] = [res[minIndex], res[i]];
  }
  return res;
}
module.exports = sort;
