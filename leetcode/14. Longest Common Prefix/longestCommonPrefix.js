const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  const str = strs[0];
  for (let i = 0; i < str.length; i += 1) {
    if (!strs.every((el) => el[i] === str[i])) return str.slice(0, i);
  }

  return str;
};

module.exports = longestCommonPrefix;
