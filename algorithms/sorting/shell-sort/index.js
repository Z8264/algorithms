/**
 * Shell Sort
 * 希尔排序
 */
function sort(arr = []) {
  const a = [...arr];

  let gap = Math.floor(a.length / 2);

  while (gap > 0) {
    for (let i = 0; i < a.length - gap; i += 1) {
      let currentIndex = i;
      let gapIndex = i + gap;

      while (currentIndex >= 0) {
        if (a[gapIndex] < a[currentIndex]) {
          [a[gapIndex], a[currentIndex]] = [a[currentIndex], a[gapIndex]];
        }
        [currentIndex, gapIndex] = [currentIndex - gap, currentIndex];
      }
    }

    gap = Math.floor(gap / 2);
  }
  return a;
}
module.exports = sort;
