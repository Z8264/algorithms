/**
 * Insertion Sort
 * 插入排序
 */
function sort(arr) {
  const res = [...arr];
  for (let i = 1; i < res.length; i += 1) {
    for (let j = i; j > 0 && res[j] < res[j - 1]; j -= 1) {
      [res[j], res[j - 1]] = [res[j - 1], res[j]];
    }
  }
  return res;
}
module.exports = sort;
