/**
 * Shell Sort
 * 希尔排序
 */
function sort(arr) {
  const res = [...arr];

  let gap = Math.floor(res.length / 2);

  while (gap > 0) {
    for (let i = 0; i < res.length - gap; i += 1) {
      let currentIndex = i;
      let gapIndex = i + gap;

      while (currentIndex >= 0) {
        if (res[gapIndex] < res[currentIndex]) {
          [res[gapIndex], res[currentIndex]] = [res[currentIndex], res[gapIndex]];
        }
        [currentIndex, gapIndex] = [currentIndex - gap, currentIndex];
      }
    }

    gap = Math.floor(gap / 2);
  }
  return res;
}
module.exports = sort;
