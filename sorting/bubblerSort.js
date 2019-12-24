/**
 * Bubbler Sort
 * 冒泡排序
 */
function sort(arr) {
  const res = [...arr];
  for (let i = 0; i < res.length; i += 1) {
    for (let j = i; j < res.length; j += 1) {
      if (res[i] > res[j]) [res[i], res[j]] = [res[j], res[i]];
    }
  }
  return res;
}

module.exports = sort;
