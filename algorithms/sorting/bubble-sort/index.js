/**
 * Bubbler Sort
 */
function sort(arr = []) {
  const a = [...arr];
  let swapped = false;
  for (let i = 1; i < a.length; i += 1) {
    for (let j = 0; j < a.length - i; j += 1) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) return a;
  }
  return a;
}

module.exports = sort;
