/**
 * indexOf
 */
const lengthOfLongestSubstring = (s) => {
  let [max, start] = [0, 0];
  for (let i = 0; i < s.length; i += 1) {
    const index = s.indexOf(s[i], start);
    if (index !== -1 && index < i) start = index + 1;
    else max = Math.max(max, i - start + 1);
  }
  return max;
};
/**
 * 使用对象，性能远低于字符串indexOf查找
 */
/**
const lengthOfLongestSubstring2 = (s) => {
  const o = {};
  let [max, start] = [0, 0];
  for (let i = 0; i < s.length; i += 1) {
    if (o[s[i]] !== undefined && o[s[i]] >= start) start = o[s[i]] + 1;
    else max = Math.max(max, i - start + 1);
    o[s[i]] = i;
  }
  return max;
};
*/
module.exports = lengthOfLongestSubstring;
