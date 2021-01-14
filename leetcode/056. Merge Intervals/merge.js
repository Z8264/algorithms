
const merge = (intervals) => {
  if (!intervals.length) return [];

  intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  const res = [];
  let [start, end] = [intervals[0][0], intervals[0][1]];
  for (let i = 1; i < intervals.length; i += 1) {
    if (intervals[i][0] > end) {
      res.push([start, end]);
      [start, end] = [intervals[i][0], intervals[i][1]];
    } else {
      end = Math.max(intervals[i][1], end);
    }
  }
  res.push([start, end]);

  return res;
};
module.exports = merge;
